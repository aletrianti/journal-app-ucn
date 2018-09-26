// View route

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
    

    try {
        const pool = await sql.connect(con);
        const result = await pool.request().query('SELECT * FROM Reflection; SELECT * FROM Note');

        res.send(JSON.stringify(result.recordset));
    } catch (err) {
        res.status(400).send(`$(err)`);
    }
    sql.close();
});

// Export module
module.exports = router;