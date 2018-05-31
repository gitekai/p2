const Contacto = `

type ContactoPersona {
  id: ID!
  nombre: String! 
  apellidos: String!
  cargo: String
  departamento: String
  birthdate: String
  recibeRegaloEnNavidad: Boolean
  padre: Int
  emails: [String! ]!
  direcciones: [ContactoDireccion! ]!
  "gesAntiguos y ges"
  telefonos: [ContactoTelefono! ]!
}

type ContactoDireccion {
  id: ID!
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

enum TipoTelefono {
  movil
  fax
  fijo
}

type ContactoTelefono {
  id: ID!
  idPrefijo: Int! 
  numero: String!
  tipo: TipoTelefono! 
  descripcion: String
}

`;

export default Contacto;
