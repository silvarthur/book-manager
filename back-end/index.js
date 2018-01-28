var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/my-library-manager-db');
var db = mongoose.connection;

app.use(bodyParser.json());

//Routes
var book = require('./routes/book.routes');

app.use('/', book);

app.listen(3000);
console.log("Running on port 3000...");