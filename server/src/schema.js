import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolver from './resolver';


import Contacto from './domainObjects/Contacto/schema';
import Pais from './domainObjects/Pais/schema';
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

const resolvers = {
  RootQuery: resolver.Query,
  RootMutation: resolver.Mutation,
  Contacto: resolver.Contacto,
  RootSubscription: resolver.Subscription,
};


const schema = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    RootMutation,
    RootSubscription,
    Contacto,
    Pais,
  ],
  resolvers,
});


/*
addMockFunctionsToSchema({
  schema,
  mock,
  preserveResolvers: true,
});
*/
export default schema;
