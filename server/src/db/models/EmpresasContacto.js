export default (sequelize, DataTypes) => {
  const Empresa = sequelize.define(
    'empresasContacto',
    {
      idContacto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
      webCooperativa: {
        type: DataTypes.STRING,
        validate: {
          isURL: true,
        },
      },
    },
    {},
  );

  // Es lo que hay que hacer para desactivar el primary key creado automaticamente
  Empresa.removeAttribute('id');

  Empresa.associate = (models) => {
    Empresa.belongsTo(models.contactos, {
      foreignKey: {
        name: 'idContacto',
        primaryKey: true,
      },
    });
  };

  return Empresa;
};
