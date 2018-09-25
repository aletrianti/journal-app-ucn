// APP ENTRY POINT - app.js
// "node app.js"

const express = require('express');
const app = express();


// Require modules
const landing = require('./routes/landing');
const login = require('./routes/login');
const dashboard = require('./routes/dashboard');


// If it is a JSON object, parse it
app.use(express.json());
// HTML
app.use(express.static(__dirname + '/public/views'));
// CSS and JS (static)
app.use(express.static(__dirname + '/public'));

// Routes
// Do NOT add the path to the page before the variable - it gives an error
app.use(landing);
app.use(login);
app.use(dashboard);


// Server - Listening on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));