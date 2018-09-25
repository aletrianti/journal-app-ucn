// Login route

const jwt = require('jsonwebtoken');
const Joi = require('joi');
const express = require("express");
const router = express.Router();
const path = require("path");
const con = require('../config/connection');
const sql = require('mssql');
const auth = require('../middleware/auth');

// GET
router.get('/login', auth, async (req, res) => {
    // Render the login page
    res.sendFile(path.join(__dirname + '/login.html'));

    try {
        const pool = await sql.connect(con);
        const result = await pool.request().query('SELECT * FROM Student; SELECT * FROM Lecturer');

        res.send(JSON.stringify(result.recordset));
    } catch (err) {
        res.status(400).send(`$(err)`);
    }
    sql.close();
});

// POST
router.post('/login', auth, async (req, res) => {
    try {
        res.sendFile(path.join(__dirname + '/dashboard.html')); 
    } catch(err) {
        res.sendFile(path.join(__dirname + '/login.html'));
    }
});

// Export module
module.exports = router;