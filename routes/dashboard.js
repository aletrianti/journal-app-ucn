// Dashboard - dashboard route

const express = require('express');
const router = express.Router();
const path = require("path");
const Joi = require('joi');

// GET - Render the dashboard page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dashboard.html'));
});

// Export module
module.exports = router;