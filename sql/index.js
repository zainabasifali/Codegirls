import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from './Database/connection.js'; 
import express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { Book } from './Model/books.js';
import { User } from './Model/user.js';
import {router} from './Route/route.js'

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
app.use('/styles', express.static(path.join(__dirname, 'public/Stylesheets')));

User.belongsToMany(Book, { through: 'UserBooks' });
Book.belongsToMany(User, { through: 'UserBooks' });

sequelize.sync();
app.listen(9000);
