const express = require('express');
const config  = require('../config'); // import our config.js file
const path    = require('path');
const routes  = require('./routes/index'); // import our routes

// create our express app
const app = express();

// grab our views, and use ejs templating
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// serve our static files -> url would look like: localhost:3000/js/main.js
app.use(express.static(__dirname + '/static'));

// mount our routes
app.use('/', routes);

// run the app on the port specified in config.port
app.listen(config.PORT, function(){
    console.log(`Server is now running at http://localhost:${config.PORT}`);
});