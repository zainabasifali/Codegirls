import { sequelize } from '../Database/connection.js';
import { DataTypes } from 'sequelize';
import { User } from './user.js';

export const Book = sequelize.define('Books', {
  bookname: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
});