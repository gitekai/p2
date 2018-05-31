import producto from './Type';
import query from './Query';
import mutation from './Mutation';

const typeDef = `
  ${producto}
  ${query}
  ${mutation}
`;

export default typeDef;
