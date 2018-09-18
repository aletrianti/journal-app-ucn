// Initial route - landing route

const express = require('express');
const router = express.Router();

// GET - Render the landing page
router.get('/', (req, res) => {
    res.render("index");
});

// Export module
module.exports = router;