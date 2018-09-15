// APP ENTRY POINT - app.js
// "node app.js"

const express = require('express');
const app = express();


// Require modules
const landing = require('./routes/landing');
const forms = require('./routes/forms');
const choice = require('./routes/choice');
const dashboard = require('./routes/dashboard');


// If it is a JSON object, parse it
app.use(express.json());


// Routes
// Do NOT add the path to the page before the variable - it gives an error
app.use(landing);
app.use(forms);
app.use(choice);
app.use(dashboard);


// Server - Listening on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));