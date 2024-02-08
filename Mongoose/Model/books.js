const mongoose = require('mongoose');

const book_schema = new mongoose.Schema({
    name:String,
    author:String,
    category:String
 })

 exports.Book = mongoose.model('Book',book_schema)