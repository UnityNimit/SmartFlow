const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        console.log('Register request received:', req.body); // Debugging
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        console.log('User  registered successfully:', user); // Debugging
        res.json({ message: 'User  registered successfully' });
    } catch (error) {
        console.error('Registration error:', error); // Debugging
        res.status(500).json({ message: 'An error occurred during registration' });
    }
});

router.post('/login', async (req, res) => {
    try {
        console.log('Login request received:', req.body); // Debugging
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user && await bcrypt.compare(password, user.password)) {
            console.log('Login successful:', user); // Debugging
            res.json({ message: 'Login successful' });
        } else {
            console.log('Invalid username or password'); // Debugging
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Login error:', error); // Debugging
        res.status(500).json({ message: 'An error occurred during login' });
    }
});

module.exports = router;
