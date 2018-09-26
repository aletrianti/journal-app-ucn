// Initial route - landing route

const express = require('express');
const router = express.Router();
const path = require("path");

// GET - Render the landing page
router.get('/', (req, res) => {
    res.sendFile('/index.html');
});

// Export module
module.exports = router;