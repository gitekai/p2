export default (sequelize, DataTypes) => {
  const Correos = sequelize.define(
    'contactoCorreos',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uq_contacto_email',
        set(val) {
          this.setDataValue('email', val.toLowerCase());
        },
        validate: {
          isEmail: true,
        },
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
    },
    {},
  );

  Correos.associate = (models) => {
    Correos.belongsTo(models.contactos, {
      foreignKey: {
        name: 'idContacto',
        allowNull: false,
        unique: 'uq_contacto_email',
      },
    });
  };

  return Correos;
};
