const GrupoEmpresarial = `

type GrupoEmpresarial{
  id: ID!
  nombre: String! 

  correos: [ String! ]
  telefonos: [ String! ]
  contactos: [ PersonaContacto! ]
  direccion: String
  razonesSociales: [ String! ]
}
`;

export default GrupoEmpresarial;
