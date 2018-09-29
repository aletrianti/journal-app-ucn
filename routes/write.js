// Write route


const Joi = require('joi');
const express = require("express");
const router = express.Router();
const con = require('../config/connection');
const sql = require('mssql');


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