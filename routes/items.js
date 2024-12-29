const express = require('express');
const Item = require('../models/item');
const router = express.Router();

// Get all items
router.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// Create a new item
router.post('/items', async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.json(item);
});

module.exports = router;
