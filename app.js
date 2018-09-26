// APP ENTRY POINT - app.js
// "node app.js"

const express = require('express');
const app = express();
const cors = require('cors');


// Require modules
const landing = require('./routes/landing');
const login = require('./routes/login');
const dashboard = require('./routes/dashboard');
const view = require('./routes/view');
const write = require('./routes/write');


// If it is a JSON object, parse it
app.use(express.json());
// CSS and JS (static)
app.use(express.static(__dirname + '/public'));
// CORS
app.use(cors());

// Routes
app.use('/', landing);
app.use('/login', login);
app.use('/dashboard', dashboard);
app.use('/view', view);
app.use('/write', write);


// Server - Listening on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));