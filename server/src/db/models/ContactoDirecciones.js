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
        type: DataTypes.STRING,
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
      descripcion: {
        type: DataTypes.TEXT,
      },
      latitud: {
        type: DataTypes.FLOAT,
        validate: { min: -90, max: 90 },
      },
      longitud: {
        type: DataTypes.FLOAT,
        validate: { min: -180, max: 180 },
      },
    },
    {
      validate: {
        bothCoordsOrNone() {
          if ((!this.latitud) !== (!this.longitud)) {
            throw new Error('Require either both latitude and longitude or neither');
          }
        },
      },
    },
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
