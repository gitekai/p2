function cambiaNombres(nombre) {
  return nombre;
}

export default (sequelize, DataTypes) => {
  const Persona = sequelize.define(
    'contactoPersona',
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        set(val) {
          this.setDataValue('nombre', cambiaNombres(val));
        },
      },
      apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
        set(val) {
          this.setDataValue('apellidos', cambiaNombres(val));
        },
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
      cargo: {
        type: DataTypes.STRING,
      },
      departamento: {
        type: DataTypes.STRING,
      },
      cumpleanos: {
        type: DataTypes.DATEONLY,
      },
      recibeRegaloEnNavidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {},
  );

  return Persona;
};
