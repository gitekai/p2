const Contacto = `
type Contacto {
  id: ID!
  "This will be a multivalued field
  Debería cambiar el nombre a Usos de contacto
  "
  tipo: TipoContacto!
  emails: [String! ]!
  telefonos: [ContactoTelefono! ]!
}
`;