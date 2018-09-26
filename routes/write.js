// Write route

const jwt = require('jsonwebtoken');
const Joi = require('joi');
const express = require("express");
const router = express.Router();
const path = require("path");
const con = require('../config/connection');
const sql = require('mssql');
const auth = require('../middleware/auth');

// GET
router.get('/', /*auth,*/ async (req, res) => {
    // Render the login page
    res.sendFile('/write.html');
});

// POST
router.post('/', (req, res) => {
    // Take note and/or reflection and add it to the db
    // Add it to the view page 
});

// Export module
module.exports = router;