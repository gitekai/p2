const createContacto = `

extend type RootMutation {
  createContacto(data: createContacto!): Contacto
}

input createContacto{
  nombre: String! 
  apellidos: String!
  cargo: String
  departamento: String
  birthdate: String
  recibeRegaloEnNavidad: Boolean
  padre: Int
  linkedIN: String
  emails: [String! ]
  telefonos: [createContactoTelefono! ]
  direcciones: [createContactoDireccion! ]
}

input createContactoTelefono {
  idPrefijo: Int! 
  numero: String!
  tipo: TipoTelefono! 
  descripcion: String
}

input createContactoDireccion {
  codigoPostal: String!
  direccion: String!
  direccionDetalle: String
  ciudad: String! 
  provinciaRegion: String
  idPais: Int!
  longitud: Int
  latitud: Int 
  descripcion: String
}
`;


const addCorreos = `

 extend type RootMutation{
  addCorreos(data: addContactoCorreos!): Contacto
 }

 input addContactoCorreos {
  id: Int!
  correos: [String!]!  
}
`;

const addTelefonos = `

extend type RootMutation {
  addTelefonos(data: addContactoTelefonos!): Contacto
}

input addContactoTelefonos {
  id: Int!
  telefonos: [String! ]!
}

`;

const addDirecciones = `

extend type RootMutation {
  addDireccionesToContact(data: addContactoDirecciones! ): Contacto
}

input addContactoDirecciones {
  id: Int!
  direcciones: [String! ]!
}
`;

const modifyContacto = `

extend type RootMutation{
  modifyContacto(data: modifyContacto!): Contacto
}

input modifyContacto{
  id: Int! 
  nombre: String 
  apellidos: String
  cargo: String
  departamento: String
  birthdate: String
  recibeRegaloEnNavidad: Boolean
  padre: Int
  linkedIN: String
  correos: [String! ]
  "Esto me imagino tiene que machacar todos los numeros de Telefono del Contacto"
  telefonos: [String! ]
  "Esto me imagino tiene que machacar todas las Direcciones del Contacto"
   direcciones: [String! ]
}

`;

const Mutation = `
${createContacto}
${modifyContacto}
${addCorreos}
${addDirecciones}
${addTelefonos}
`;

export default Mutation;

