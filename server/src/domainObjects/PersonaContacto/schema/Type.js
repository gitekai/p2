const Contacto = `

type PersonaContacto {
  id: ID!
  tipo: TipoContacto!
  nombre: String! 
  apellidos: String!
  cargo: String
  departamento: String
  birthdate: String
  recibeRegaloEnNavidad: Boolean
  padre: Int
  emails: [String! ]!
  direcciones: [PersonaContactoDireccion! ]!
  "gesAntiguos y ges"
  telefonos: [ContactoTelefono! ]!
}

type PersonaContactoDireccion {
  id: ID!
  codigoPostal: String!
  direccion: String!
  direccionDetalle: String
  ciudad: String! 
  provinciaRegion: String
  idPais: Int!
  longitud: Float
  latitud: Float
  descripcion: String
}
enum TipoContacto {
  primario
  secundario
  tecnico
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
