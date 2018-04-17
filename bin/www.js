import db from '../db/models';

db.sequelize.sync({ force: true });
