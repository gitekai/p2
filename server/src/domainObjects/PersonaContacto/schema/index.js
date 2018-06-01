import contacto from './Type';
import contactoQuery from './Query';
import contactoMutation from './Mutation';
import contactoSubscription from './Subscription';

const typeDef = `
  ${contacto}
  ${contactoQuery}
  ${contactoMutation}
  ${contactoSubscription}
`;

export default typeDef;
