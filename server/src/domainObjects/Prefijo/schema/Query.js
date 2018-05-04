const Query = `

extend type RootQuery {
  prefijos(where: inpPrefijoWhere, first: Int, skip: Int): Prefijo
  prefijo(id: ID!): Prefijo
}


input inpPrefijoWhere {
 nombre_eq: String ! 
}


`;

export default Query;
