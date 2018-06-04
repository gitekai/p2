function cambiaNombres(val) {
  // Coge la letra con que empieza cada String y lo pone en Mayus y el resto en Menus
  return val
    .split(' ')
    .map(word =>
      `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`)
    .join(' ');
}

export default (sequelize, DataTypes) => {
  const Persona = sequelize.define(
    'personasContacto',
    {
      idContacto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
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
      linkedIn: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
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

  // Es lo que hay que hacer para desactivar el primary key creado automaticamente
  Persona.removeAttribute('id');

  Persona.associate = (models) => {
    Persona.belongsTo(models.contactos, {
      foreignKey: {
        name: 'idContacto',
        primaryKey: true,
      },
    });
  };

  return Persona;
};
