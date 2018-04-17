function cambiaNombres(val) {
  // Coge la letra con que empieza cada String y lo pone en Mayus y el resto en Menus
  return val
    .split(' ')
    .map(word =>
      `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`)
    .join(' ');
}

export default (sequelize, DataTypes) => {
  const Contactos = sequelize.define(
    'contactos',
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

  /*
  Contactos.associate = (models) => {
    Contactos.hasMany(models.contactoTelefonos, {
      foreignKey: 'idContacto',
      allowNull: false,
    });
    Contactos.hasMany(models.contactoCorreos, {
      foreignKey: 'idContacto',
      allowNull: false,
    });
    Contactos.hasMany(models.contactoDirecciones, {
      foreignKey: 'idContacto',
      allowNull: false,
    });
  };
*/
  return Contactos;
};
