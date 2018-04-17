export default (sequelize, DataTypes) => {
  const Direcciones = sequelize.define(
    'contactoDirecciones',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      direccion: {
        // Calle y número, apartado de correos
        type: DataTypes.STRING,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      codigoPostal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccionDetalles: {
        // Apartamento, unidad, edificio, piso etc
        type: DataTypes.STRING,
      },
      provinciaRegion: {
        type: DataTypes.INTEGER,
      },
      latitude: {
        type: DataTypes.FLOAT,
      },
      longitude: {
        type: DataTypes.FLOAT,
      },
    },
    {},
  );

  Direcciones.associate = (models) => {
    Direcciones.belongsTo(models.contactos, {
      foreignKey: {
        name: 'idContacto',
        allowNull: false,
        primaryKey: true,
      },
    });
    Direcciones.belongsTo(models.paises, {
      foreignKey: {
        name: 'idPais',
        allowNull: false,
      },
    });
  };

  return Direcciones;
};
