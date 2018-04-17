import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { Query, Mutation, Subscription } from './resolver';


import Contacto from './domainObjects/Contacto/schema';
import mock from './mock';


const RootQuery = `
  type RootQuery {
    _ : Boolean
  }
`;

const RootMutation = `
  type RootMutation{
    _ : Boolean
  }
`;
const RootSubscription = `
  type RootSubscription{
    _ : Boolean
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
    mutation: RootMutation
    subscription: RootSubscription
  }
`;

/*
const resolvers = {
  RootQuery: Query,
  RootMutation: Mutation,
  RootSubscription: Subscription,
};
*/

const schema = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    RootMutation,
    RootSubscription,
    Contacto,
  ],
  // resolvers,
});

addMockFunctionsToSchema({
  schema,
  mock,
  preserveResolvers: true,
});

export default schema;
