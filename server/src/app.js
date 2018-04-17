import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';

import schema from './schema';
import context from './context';


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

app.use(
  '/erp2d2/v1.0',
  graphqlHTTP(request => ({
    schema,
    context: context(request),
    graphiql: true,
  })),
);
app.listen(4000);
