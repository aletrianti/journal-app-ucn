// AUTH MIDDLEWARE

const config = require ('config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied: no token provided.');

    try {
        const decoded = jwr.verify(token, config.get('jwtPrivateKey')); // private key??
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(400).send('Invalid token.');
    }
};