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

const resolver = {
  Query: Object.assign(
    {},
    contacotQuery,
    paisQuery,
  ),

  Mutation: Object.assign(
    {},
    contactoMutation,
    paisMutation,
  ),
  Subscription: Object.assign(
    {},
    contactoSubscription,
  ),

  Contacto,

};

export default resolver;
