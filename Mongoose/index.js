const mongoose = require('mongoose');
const express = require("express");
const path = require('path')
const { dbData } = require('./Database/connection');
const router = require('./route/route');
require('dotenv').config()

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true }))
app.use('/', router);
app.use('/styles', express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/images', express.static(path.join(__dirname, 'public/Images')));

dbData()

app.listen(process.env.port, function () {
   console.log(`Port is now running @ ${process.env.port}`)
 });
