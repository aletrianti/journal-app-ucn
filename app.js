// APP ENTRY POINT - app.js
// "node app.js"

const express = require('express');
const app = express();
const cors = require('cors');


// Require modules
const index = require('./routes/index');
const login = require('./routes/login');
const dashboard = require('./routes/dashboard');
const view = require('./routes/view');
const write = require('./routes/write');


// If it is a JSON object, parse it
app.use(express.json());
// Track static files - public folder
app.use(express.static(__dirname + '/public'));
// CORS
app.use(cors());

// Routes
app.use('/', index);
app.use('/login', login);
app.use('/dashboard', dashboard);
app.use('/view', view);
app.use('/write', write);


// Server - Listening on port 3000
app.listen(process.env.PORT || 3000, () => console.log('Listening on port 3000...'));