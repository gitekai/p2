const Query = `

extend type RootQuery{
  contacto(id: Int! ): Contacto
  contactos(first: Int, skip: Int, where: queryContacto): [Contacto! ]!
}

input queryContacto{
  nombre_equals: String
  nombre_regex: String
}


`;

export default Query;
