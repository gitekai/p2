const Query = `

  extend type RootQuery {
    pais: Pais
    paises: [Pais! ]!
  }

`;

export default Query;
