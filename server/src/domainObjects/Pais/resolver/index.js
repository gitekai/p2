import { createMutation, findAll, findById } from '../../utils';

export const Query = {
  paises: findAll('paises'),
  pais: findById('paises'),
};

export const Mutation = {
  createPais: createMutation('paises'),
};
