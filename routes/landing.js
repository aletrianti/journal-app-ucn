// Initial route - landing route

const express = require('express');
const router = express.Router();

// GET - Render the landing page
router.get('/', (req, res) => {
    res.send("This will be the landing page");
});

// Export module
module.exports = router;