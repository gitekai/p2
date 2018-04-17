const Contacto = `

type Contacto {
  nombre: String! 
  apellidos: String!
  cargo: String
  departamento: String
  birthdate: String
  recibeRegaloEnNavidad: Boolean
  id_padre: Int
  correos: [String! ]!
  telefonos: [String! ]!
  direcciones: [String! ]!

}

`;

export default Contacto;
