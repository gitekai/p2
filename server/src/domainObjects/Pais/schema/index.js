import pais from './Type';
import paisQuery from './Query';
import paisMutation from './Mutation';

const typeDef = `
  ${pais}
  ${paisQuery}
  ${paisMutation}
`;

export default typeDef;
