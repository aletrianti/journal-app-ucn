// Notes or reflections - choice route

const express = require('express');
const router = express.Router();

// GET - Render the "choice" page
router.get('/choice', (req, res) => {
    res.send('This will be the "notes or reflections" page');
});

// Export module
module.exports = router;