import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from './Database/connection.js'; 
import express from 'express';
import {router} from './Route/route.js'

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

sequelize.sync();
app.listen(9000);
