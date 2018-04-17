export default (sequelize, DataTypes) => {
  const Paises = sequelize.define(
    'paises',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      esEU: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
    },
    {},
  );

  return Paises;
};
