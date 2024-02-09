const mongoose = require('mongoose');
const User = require('./user'); // Adjust path if necessary

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    category: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Use 'User' for consistency
});

exports.Book = mongoose.model('Book', bookSchema);