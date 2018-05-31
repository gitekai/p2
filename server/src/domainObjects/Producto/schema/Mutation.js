const Mutation = `

extend type RootMutation {
  createProducto(data: createProducto!): Producto
  modifyProducto(data: modifyProducto!): Producto
}

input createProducto{
  nombre: String! 
  precioEnEuro: Date!
}

input modifyProducto{
  nombre: String!
  precioEnEuro: Float!
}

`;

export default Mutation;
