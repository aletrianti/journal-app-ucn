// Login route

const express = require('express');
const router = express.Router();
const path = require("path");

// GET - Render the login page
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'));
});

// Export module
module.exports = router;