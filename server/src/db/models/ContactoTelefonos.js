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
        set(val) {
          const newVal = val.replace(/\s*/, '');
          this.setDataValue('numero', newVal);
        },
        validate: {
          isTelephonNumber(value) {
            const errorChars = value.split('').filter(c => /(\s|[0-9])/.test(c) !== true);
            if (errorChars.length > 0) {
              throw new Error('Only spaces and Numbers are allowed as telephone number values ');
            }
          },
        },
      },
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
    Telefonos.belongsTo(models.contactoPrefijos, {
      foreignKey: {
        allowNull: false,
        name: 'idPrefijo',
        unique: 'uq_contacto_prefijo_num',
      },
    });
  };

  return Telefonos;
};
