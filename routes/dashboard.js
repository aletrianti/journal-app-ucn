// Dashboard - dashboard route

const express = require('express');
const router = express.Router();

// GET - Render the dashboard page
router.get('/dashboard', (req, res) => {
    res.send("This will be the dashboard page");
});

// Export module
module.exports = router;