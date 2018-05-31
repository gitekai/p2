import DateScalar from './CustomScalars/resolver/Date';

import {
  Query as contacotQuery,
  Mutation as contactoMutation,
  Subscription as contactoSubscription,
  Contacto,
} from './domainObjects/Contacto/resolver';

import {
  Query as paisQuery,
  Mutation as paisMutation,
} from './domainObjects/Pais/resolver';

import {
  Query as productoQuery,
  Mutation as productoMutation,

} from './domainObjects/Producto/resolver';

const resolver = {
  Date: DateScalar,
  Query: Object.assign(
    {},
    contacotQuery,
    paisQuery,
    productoQuery,
  ),

  Mutation: Object.assign(
    {},
    contactoMutation,
    paisMutation,
    productoMutation,
  ),
  Subscription: Object.assign(
    {},
    contactoSubscription,
  ),

  Contacto,
};

export default resolver;
