const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const express = require("express");
const router = express.Router();
const con = require('../config/connection');
const sql = require('mssql');

router.post('/', async (req, res) => {
    // schema
    const schema = {
        UserEmail: Joi.string().min(5).max(255).email().required(),
        UserPassword: Joi.string().min(5).max(255).required()
    };

    // error validation
    const {error} = Joi.validate(req.body, schema);
    if (error) return res.status(400).send(error.details[0].message);

    // check db
    try {
        const pool = await sql.connect(con);

        // check email
        const result = await pool.request()
                     .input('UserEmail', sql.NVarChar, req.body.UserEmail)
                     .query('SELECT * FROM AUTH_USER WHERE UserEmail = @UserEmail');

        const user = result.recordset[0];

        if (!user) throw 'Invalid username or password';

        // check password
        const invalidPass = user.UserPassword.localeCompare(req.body.UserPassword);
        if (invalidPass) throw 'Invalid username or password';

        // json web token (jwt)
        const playload = {"UserID": user.UserID};
        if (user.UserRole === 'admin') playload.isAdmin = true;
        const token = jwt.sign(playload, config.get('jwtPrivateKey'));
        res.send(token);

    } catch (err) {
        res.status(400).send(`$(err)`);
    }
    sql.close();
});

module.exports = router;