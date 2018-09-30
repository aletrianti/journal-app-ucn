// View route

const Joi = require('joi');
const express = require("express");
const router = express.Router();
const con = require('../config/connection');
const sql = require('mssql');

// GET
// Request name of the reflections from the database 
router.get('/', async (req, res) => {
    try {
        const pool = await sql.connect(con);
        const result = await pool.request().query('SELECT ReflectionName FROM Reflection;');

        res.send(JSON.stringify(result.recordset));
    } catch (err) {
        res.status(400).send(`${err}`);
    }
    sql.close();
});

// GET
router.get('/:id', async (req, res) => {
    try {
        // "TypeError: Cannot read property 'find' of undefined" --- ???
        const result = con.Reflection.find(x => x.ReflectionID === parseInt(req.params.id));

        res.send(JSON.stringify(result));
    } catch (err) {
        res.status(400).send(`${err}`);
    }
    sql.close();
});

// Export module
module.exports = router;