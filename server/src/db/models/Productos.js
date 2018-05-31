export default (sequelize, DataTypes) => {
  const Productos = sequelize.define(
    'productos',
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
      precioEnEuro: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {},
  );

  return Productos;
};
