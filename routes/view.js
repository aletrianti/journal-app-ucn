// View route

const Joi = require('joi');
const express = require("express");
const router = express.Router();
const con = require('../config/connection');
const sql = require('mssql');

// GET
// should display the name of the reflection/note in a list in view.html ----- ???
router.get('/', async (req, res) => {
    try {
        const pool = await sql.connect(con);
        const result = await pool.request().query('SELECT ReflectionName FROM Reflection; SELECT NoteName FROM Note');

        res.send(JSON.stringify(result.recordset));
    } catch (err) {
        res.status(400).send(`$(err)`);
    }
    sql.close();
});

// GET
router.get('/:id', async (req, res) => {
    // display note/reflection selected in view.html ------ ???
    try {
        const pool = await sql.connect(con);
        const result = await pool.request().query('SELECT ReflectionName, ReflectionBody FROM Reflection; SELECT NoteName, NoteBody FROM Note');

        res.send(JSON.stringify(result.recordset));
    } catch (err) {
        res.status(400).send(`$(err)`);
    }
    sql.close();
});

// Export module
module.exports = router;