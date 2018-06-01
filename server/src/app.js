/* eslint-disable */

import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';


import db from './db/models';
//db.sequelize.sync({ force: true }); 




import contactoLoader from './domainObjects/PersonaContacto/dataloader';

import schema from './schema';
import context from './context';



const PORT = 4000;
const server = express();

server.use('*', cors({ origin: `http://localhost:${PORT}` }));

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => {
    return {
      schema,
      context: context(req),
    };
  }),
);

server.use('/v1/erp2d2', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
}));

// Wrap the Express server
const ws = createServer(server);

db.sequelize.sync({ force: true }).then(() => {


  ws.listen(PORT, () => {
    console.log(`Apollo Server is now running on http://localhost:${PORT}`);
    // Set up the WebSocket for handling GraphQL subscriptions
    new SubscriptionServer({
      execute,
      subscribe,
      schema,
      onConnect: (connectionParams, webSocket) => {
        return {
          dataloaders: {
            ...contactoLoader(db),
          }
        }
      },

    }, {
        server: ws,
        path: '/subscriptions',
      });
  });

});

