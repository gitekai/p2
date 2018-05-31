const Query = `

extend type RootQuery{
  producto(id: Int! ): Producto
  productos(first: Int, skip: Int, where: queryProducto): [Producto ! ]!
}

input queryProducto{
  nombre_equals: String
  nombre_regex: String
}

`;

export default Query;
