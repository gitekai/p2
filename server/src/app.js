/*
import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';


import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';

import { maskErrors } from 'graphql-errors';
*/


import schema from './schema';
import context from './context';
import db from './db/models';


/*
const app = express();
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
//maskErrors(schema);
*/

// Wrap the Express server

/*
app.use(
  '/erp2d2/v1.0',
  graphqlHTTP(request => ({
    schema,
    context: context(request),
    graphiql: true,
  })),
);





db.sequelize.sync({ force: true }).then(() => {
  //app.listen(4000);

});
*/
/*
const PORT = 4000;
const server = express();

server.use('*', cors({ origin: 'http://localhost:3000' }));



server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: 'ws://localhost:4000/subscriptions',
}));

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

// We wrap the express server so that we can attach the WebSocket for subscriptions
const ws = createServer(server);

db.sequelize.sync({ force: true }).then(() => {

  ws.listen(PORT, () => {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}`);

    // Set up the WebSocket for handling GraphQL subscriptions
    new SubscriptionServer({
      execute,
      subscribe,
      schema
    }, {
        server: ws,
        path: '/subscriptions',
      });
  });
});   
*/
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
import contactoLoader from './domainObjects/Contacto/resolver/dataloader';

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

server.use('/graphiql', graphiqlExpress({
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