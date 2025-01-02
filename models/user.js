const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Explicitly specify the collection name as 'users'
const User = mongoose.model('User ', userSchema, 'users');

module.exports = User;