import casual from 'casual';

casual.seed(123);

/* eslint-disable */
const mocks = {
  Int: () => casual.integer(from = 555, to = 10000),
  Boolean: () => casual.coin_flip,
  String: () => casual.word,
  // razonesSociales: () => new MockList([10, 30]),
  // GrupoEmpresarial: GrupoEmpresarial(casual),
};

export default mocks;
