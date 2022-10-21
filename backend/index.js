const express = require('express');
const path = require('path');
const adminRoute = require('./routes/admin');

const app = express();

//EJS template engine setup
app.set('view engine', 'ejs');
app.set('views', './src/pages');

//Setting up the directory on the Server for CSS, JavaScript and media files
app.use('/static', express.static(path.join(__dirname + '/public')));

//Configuring the Server to work with form submissions and json files
app.use(express.urlencoded({
    extended: false }));
app.use(express.json());

//Connecting all the routes
app.use('/', adminRoute);

const port = process.env.PORT ||
5000;

app.listen(port, () =>
console.log('Server running on port ${5000}, http://localhost:${5000}'));
