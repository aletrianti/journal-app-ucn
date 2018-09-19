// APP ENTRY POINT - app.js
// "node app.js"

const express = require('express');
const app = express();


// Require modules
const landing = require('./routes/landing');
const register = require('./routes/register');
const login = require('./routes/login');
const choice = require('./routes/choice');
const dashboard = require('./routes/dashboard');


// If it is a JSON object, parse it
app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');

// Routes
// Do NOT add the path to the page before the variable - it gives an error
app.use(landing);
app.use(register);
app.use(login);
app.use(choice);
app.use(dashboard);


// Server - Listening on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));