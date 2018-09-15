// Sign up and sign in - forms route

const express = require('express');
const router = express.Router();

// GET - Render the forms page
router.get('/forms', (req, res) => {
    res.send("This will be the sign up and sign in page");
});

// Export module
module.exports = router;