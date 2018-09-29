// View route

const Joi = require('joi');
const express = require("express");
const router = express.Router();
const con = require('../config/connection');
const sql = require('mssql');

// GET
// should display the name of the reflection/note in a list in view.html 
router.get('/', async (req, res) => {
    try {
        const pool = await sql.connect(con);
        const result = await pool.request().query('SELECT ReflectionName FROM Reflection;');

        res.send(JSON.stringify(result.recordset));
    } catch (err) {
        res.status(400).send(`$(err)`);
    }
    sql.close();
});

// GET
// display note/reflection selected in view.html 
// view selected note/reflection in the form in write.html
router.get('/:id', async (req, res) => {
    try {
        const pool = await sql.connect(con);
        const result = await pool.request().query('SELECT ReflectionName, ReflectionBody FROM Reflection;');

        res.send(JSON.stringify(result.recordset));
    } catch (err) {
        res.status(400).send(`$(err)`);
    }
    sql.close();
});

// Export module
module.exports = router;