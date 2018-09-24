// Dashboard - dashboard route

const express = require('express');
const router = express.Router();
const path = require("path");

// GET - Render the dashboard page
router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname + '/dashboard.html'));
});

// Export module
module.exports = router;