const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    name:String,
    psw:String,
    email:String
 })

 exports.User = mongoose.model('User',user_schema)