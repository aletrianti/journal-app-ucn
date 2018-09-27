const config = require ('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const express = require("express");
const router = express.Router();
const con = require('../config/connection');
const sql = require('mssql');

router.post('/login', async (req, res) => {
    // schema
    const schema = {
        StudentMail: Joi.string().min(5).max(255).email().required(),
        LecturerMail: Joi.string().min(5).max(255).email().required(),
        StudentPassword: Joi.string().min(5).max(255).required(),
        LecturerPassword: Joi.string().min(5).max(255).required()
    };

    // error validation
    const {error} = Joi.validate(req.body, schema);
    if (error) return res.status(400).send(error.details[0].message);

    // check db
    try {
        const pool = await sql.connect(con);

        // check email
        const result = await pool.request()
                     .input('StudentMail', sql.NVarChar, req.body.StudentMail)
                     .input('LecturerMail', sql.NVarChar, req.body.LecturerMail)
                     .query('SELECT * FROM AUTH_USER WHERE StudentMail = @StudentMail')
                     .query('SELECT * FROM AUTH_USER WHERE LecturerMail = @LecturerMail');

        const user = result.recordset[0];

        if (!user) throw 'Invalid username or password';

        // check password
        const invalidPassStudent = user.StudentPassword.localeCompare(req.body.StudentPassword);
        const invalidPassLecturer = user.LecturerPassword.localeCompare(req.body.LecturerPassword);
        if (invalidPassStudent || invalidPassLecturer) throw 'Invalid username or password';

        // json web token (jwt)
        /*
        const payload = {"UserID": user.UserID};
        if (user.UserRole === 'admin') payload.isAdmin = true;
        const token = jwt.sign(payload, config.get('jwtPrivateKey'));
        res.send(token);
        */

    } catch (err) {
        
    }
    sql.close();
});

module.exports = router;