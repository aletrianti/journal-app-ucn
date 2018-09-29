// View route

const Joi = require('joi');
const express = require("express");
const router = express.Router();
const con = require('../config/connection');
const sql = require('mssql');

// GET
// display the name of the reflection/note in a list in view.html 
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
router.get('/:id', (req, res) => {
    // display note/reflection selected in view.html
    // "TypeError: Cannot read property 'find' of undefined" --- ???
    const result = con.Reflection.find(a => a.ReflectionID === parseInt(req.params.id));
    if (!result) { 
        res.status(404).send('The selected reflection was not found.');
        return;
    }
    res.send(JSON.stringify(result));

    // view selected note/reflection in the form in write.html
    // code goes here
});

// Export module
module.exports = router;