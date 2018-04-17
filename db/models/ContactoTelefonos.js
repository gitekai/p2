export default (sequelize, DataTypes) => {
  const Telefonos = sequelize.define(
    'contactoTelefonos',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      numero: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uq_contacto_prefijo_num',
      },
      /*
      prefijo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uq_contacto_prefijo_num',
      },
      */
      tipo: {
        type: DataTypes.ENUM('movil', 'fijo', 'fax'),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
    },
    {},
  );

  Telefonos.associate = (models) => {
    Telefonos.belongsTo(models.contactos, {
      foreignKey: {
        name: 'idContacto',
        allowNull: false,
        unique: 'uq_contacto_prefijo_num',
      },
    });
    Telefonos.belongsTo(models.prefijos, {
      foreignKey: {
        allowNull: false,
        name: 'idPrefijo',
        unique: 'uq_contacto_prefijo_num',
      },
    });
  };

  return Telefonos;
};
