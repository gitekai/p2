export default (sequelize, DataTypes) => {
  const Prefijos = sequelize.define(
    'contactoPrefijos',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
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
  return Prefijos;
};
