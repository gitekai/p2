import { createMutation, findAll, findById } from '../../utils/resolverUtils';

export const Query = {
  paises: findAll('paises'),
  pais: findById('paises'),
};

export const Mutation = {
  createPais: createMutation('paises'),
};
