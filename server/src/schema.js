import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import CustomScalarTypes from './CustomScalars';
import resolver from './resolver';


import Contacto from './domainObjects/Contacto/schema';
import Pais from './domainObjects/Pais/schema';
import Prefijo from './domainObjects/Prefijo/schema';
import Producto from './domainObjects/Producto/schema';
import GrupoEmresarial from './domainObjects/GrupoEmpresarial/schema';

import mocks from './mock';

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
  Date: resolver.Date,
};


const schema = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    RootMutation,
    RootSubscription,
    CustomScalarTypes,
    Contacto,
    Pais,
    Prefijo,
    Producto,
    GrupoEmresarial,
  ],
  resolvers,
});

addMockFunctionsToSchema({
  schema,
  mocks,
  preserveResolvers: true,
});


export default schema;
