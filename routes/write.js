// Write route


const Joi = require('joi');
const express = require("express");
const router = express.Router();
const con = require('../config/connection');
const sql = require('mssql');

// GET
router.get('/', (req, res) => {
    res.send('GET request to write route');
});

// POST
router.post('/', async (req, res) => {
    // schema
    const writeSchema = {
        // reflection
        ReflectionName: Joi.string().min(5).max(50).required(),
        ReflectionBody: Joi.string().min(5).required(),
        // note
        // NoteName: Joi.string().min(5).max(50).required(),
        // NoteBody: Joi.string().min(5).required()
    };

    // error validation
    const {error} = Joi.validate(req.body, writeSchema);
    if (error) return res.status(400).send(error.details[0].message);

    // create new reflection in db
    try {
        const pool = /*await*/ sql.connect(con);
        const reflection = /*await*/ pool.request()
                        .input('ReflectionName', sql.NVarChar, req.body.ReflectionName)
                        .query('SELECT * FROM Reflection WHERE ReflectionName = @ReflectionName');

        if (reflection.recordset[0]) throw 'This reflection already exists';

        const result = /*await*/ pool.request()
                        .input('ReflectionName', sql.NVarChar, req.body.ReflectionName)
                        .input('ReflectionBody', sql.NVarChar, req.body.ReflectionBody)
                        .query('INSERT INTO Reflection (ReflectionName, ReflectionBody) VALUES (@ReflectionName, @ReflectionBody)')

        res.send(JSON.stringify(result.recordset[0]));
    } catch (err) {
        res.status(400).send(`$(err)`);
    }
    sql.close();
});

// Export module
module.exports = router;