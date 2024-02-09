const mongoose = require('mongoose');
const User = require('./user'); 
const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    category: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});

exports.Book = mongoose.model('Book', bookSchema);