// Index route

const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET request to index route');
});

// Export module
module.exports = router;