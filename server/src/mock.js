import casual from 'casual';

import Producto from './domainObjects/Producto/mock';
import GrupoEmpresarial from './domainObjects/GrupoEmpresarial/mock';
casual.seed(123);

/* eslint-disable */
const mocks = {
  Int: () => casual.integer(from = 0 , to = 9999),
  Boolean: () => casual.coin_flip,
  String: () => casual.word,

  Producto: Producto(casual),
  GrupoEmpresarial: GrupoEmpresarial(casual),
};

export default mocks;

