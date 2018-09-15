// Login route

const express = require('express');
const router = express.Router();

// GET - Render the login page
router.get('/login', (req, res) => {
    res.send("This will be the login page");
});

// Export module
module.exports = router;