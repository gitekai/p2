const config = {
  development: {
    storage: './database_development',
    dialect: 'sqlite',
    define: {
      timestamps: true,
      freezeTableName: true,
      underscoredAll: true,
    },
  },
  preprod: {
    username: 'postgres',
    password: null,
    database: 'erp',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      timestamps: false,
      underscoredAll: true,
      underscored: true,
    },
  },
};

export default config;
