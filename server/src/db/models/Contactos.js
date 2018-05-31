export default (sequelize, DataTypes) => {
  const Contactos = sequelize.define(
    'contactos',
    {
      tipo: {
        type: DataTypes.ENUM('primario', 'secundario', 'tecnico'),
        allowNull: false,
      },
    },
    {},
  );

  return Contactos;
};
