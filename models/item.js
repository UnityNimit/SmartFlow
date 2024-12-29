const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    description: String
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
