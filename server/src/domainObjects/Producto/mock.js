/* eslint-disable */

export default (casual) => _ => 
  ({
    id: casual.integer(casual.from = 0 , casual.to = 99999),
    nombre: casual.random_element(['Xtraders','SPE','NowCasting','SPCX']),
    precioEnEuro: casual.double(casual.from = 0, casual.to = 99999),
  });
  

