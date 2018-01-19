var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/my-library-manager-db');
var db = mongoose.connection;

//Models
var Book = require('./models/book');

//Setup the route for the home page
app.get('/', function(req, res) {
    res.send('Hello, man!');
});

app.get('/books', function(req, res) {
    Book.getBooks(function(err, books) {
        if(err) {
            throw err;
        } else {
            res.json(books);
        }
    });
});

app.get('/books/:id', function(req, res) {
    Book.getBookById(req.params.id, function(err, book) {
        if(err) {
            throw err;
        } else {
            res.json(book);
        }
    });
});

app.listen(3000);
console.log("Running on port 3000...");