// Dashboard - dashboard route

const express = require('express');
const router = express.Router();
const Joi = require('joi');

router.get('/', (req, res) => {
    res.send('GET request to dashboard route');
});

// Export module
module.exports = router;