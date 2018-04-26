const Mutation = `

extend type RootMutation {
  createPais(data: inpCreatePais!): Pais
}

  input inpCreatePais {
    nombre: String! 
    esEU: Boolean! 
  }
`;

export default Mutation;
