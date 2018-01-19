var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/my-library-manager-db');
var db = mongoose.connection;

app.use(bodyParser.json());

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

app.post('/books', function(req, res) {
    var book = req.body;

    Book.addBook(book, function(err, book ) {
        if(err) {
            throw err;
        } else {
            res.json(book);
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

app.put('/books/:id', function(req, res) {
    var id = req.params.id;
    var book = req.body;

    Book.updateBook(id, book, {}, function(err, book) {
        if(err) {
            throw err;
        } else {
            res.json(book);
        }
    });
});

app.delete('/books/:id', function(req, res) {
    var id = req.params.id;

    Book.removeBook(id, function(err, book) {
        if(err) {
            throw err;
        } else {
            res.json(book);
        }
    });
});

app.listen(3000);
console.log("Running on port 3000...");