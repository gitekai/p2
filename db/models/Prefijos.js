export default (sequelize, DataTypes) => {
  const Prefijos = sequelize.define(
    'prefijos',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      codigoPais: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uq_prefijo_idp',
      },
      internationalDialingPrefix: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uq_prefijo_idp',
      },
    },
    {},
  );

  Prefijos.associate = (models) => {
    Prefijos.belongsTo(models.paises, {
      foreignKey: {
        name: 'idPais',
        allowNull: false,
      },
    });
  };

  return Prefijos;
};
