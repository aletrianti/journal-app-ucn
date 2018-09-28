// Write route


const Joi = require('joi');
const express = require("express");
const router = express.Router();
const con = require('../config/connection');
const sql = require('mssql');

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

// POST
router.post('/', (req, res) => {
    // schema
    const writeSchema = {
        // reflection
        ReflectionName: Joi.string().min(5).max(50).required(),
        ReflectionBody: Joi.string().min(5).required(),
        // note
        NoteName: Joi.string().min(5).max(50).required(),
        NoteBody: Joi.string().min(5).required()
    };

    // error validation
    const {error} = Joi.validate(req.body, writeSchema);
    if (error) return res.status(400).send(error.details[0].message);
});

// Export module
module.exports = router;