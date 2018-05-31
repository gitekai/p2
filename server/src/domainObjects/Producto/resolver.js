import { createMutation, updateMutation, findAll, findById } from '../../utils/resolverUtils';


const seqModel = 'productos';

export const Query = {
  productos: findAll(seqModel),
  producto: findById(seqModel),
};

export const Mutation = {
  createProducto: createMutation(seqModel),
  modifyProducto: updateMutation(seqModel),
};
