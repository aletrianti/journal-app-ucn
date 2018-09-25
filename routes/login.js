// Login route

const express = require('express');
const router = express.Router();
const path = require("path");
const Joi = require('joi');

// GET - Render the login page
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'));
});

// POST
router.post('/login', (req, res) => {
    if (err) {
        // Show error 
        // Redirect to login.html
        res.sendFile(path.join(__dirname + '/login.html'));
    } else {
        // Redirect to dashboard.html
        res.sendFile(path.join(__dirname + '/dashboard.html')); 
    }
});

// Export module
module.exports = router;