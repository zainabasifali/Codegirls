import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('zainabdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
