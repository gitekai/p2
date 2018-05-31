import { GraphQLScalarType, GraphQLError } from 'graphql';
import { Kind } from 'graphql/language';

function validateDate(dateString) {
  if (Number.isNaN(new Date(dateString).getTime())) {
    throw new GraphQLError(`Error when parsing string ${dateString} to date`);
  }
}

const dateType = new GraphQLScalarType({
  name: 'Date',
  description: 'custom Date type which converts a string to a js Date with its Date method.',
  parseValue(dateString) { // from client in variable
    validateDate(dateString);
    return new Date(dateString);
  },
  parseLiteral(ast) { // comes from client query
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError('Date must be of type String in format (YYYY-mm-dd HH:MM[:SS])');
    }
    validateDate(ast.value);
    return new Date(ast.value);
  },
  serialize(value) {
    return value.toISOString(); // value comes from resolver and is sent to user
  },
});

export default dateType;

