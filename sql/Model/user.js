import { sequelize } from '../Database/connection.js';
import { DataTypes } from 'sequelize';
import { Book } from './books.js';

export const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});


