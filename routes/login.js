// Login route

const jwt = require('jsonwebtoken');
const Joi = require('joi');
const express = require("express");
const router = express.Router();
const con = require('../config/connection');
const sql = require('mssql');
const auth = require('../middleware/auth');

// GET
router.get('/', /*auth,*/ async (req, res) => {
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
router.post('/', /*auth,*/ async (req, res) => {
    
});

// Export module
module.exports = router;