const Query = `

extend type RootQuery{
  contacto(id: Int! ): PersonaContacto
  contactos(first: Int, skip: Int, where: queryContacto): [PersonaContacto! ]!
}

input queryContacto{
  nombre_equals: String
  nombre_regex: String
}


`;

export default Query;
