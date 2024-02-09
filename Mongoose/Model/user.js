const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    psw: String,
    email: String,
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

exports.User = mongoose.model('User', userSchema);