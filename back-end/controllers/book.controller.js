var mongoose = require('mongoose');

var Book = require('../models/book.model');

//Gets all the books.
exports.getAllBooks = function(req, res) {
    Book.find({}, function(error, books) {
        if(error) {
            res.status(500).json({error: 'The books could not be returned!'});
        } else {
            if(books) {
                res.json(books);
            } else {
                res.status(200).json('OK!');
            }
        }
    });
}

//Gets book by id.
exports.getBookById = function(req, res) {
    Book.findById(req.params.id, function(err, book) {
        if(err) {
            res.status(500).json({error: 'The task could not be found!'});
        } else {
            res.json(book);
        }
    });
}

//Adds a book to the database.
exports.addBook = function(req, res) {
    var book = new Book();

    book.title = req.body.title;
    book.genre = req.body.genre;
    book.description = req.body.description;
    book.author = req.body.author;
    book.publisher = req.body.publisher;
    book.pages = req.body.pages;

    Book.create(book, function(error, response) {
        if(error) {
            res.status(500).json({error: 'The book could not be added!'});
        } else {
            res.json(response);
        }
    });
}
//Updates a book in the database.
exports.updateBook = function(req, res) {
    Book.findById(req.params.id, function(err, book) {
        if(err) {
            res.status(500).json({error:'The book could not be returned!'});
        } else {
            if(book) {
                if(req.body.title) book.title = req.body.title;
                if(req.body.genre) book.genre = req.body.genre;
                if(req.body.description) book.description = req.body.description;
                if(req.body.author) book.author = req.body.author;
                if(req.body.publisher) book.publisher = req.body.publisher;
                if(req.body.pages) book.pages = req.body.pages;

                book.save(function(error, book) {
                    if(error) {
                        res.json({error:'The book could not be updated!'});
                    } else {
                        res.json(book);
                    }
                });
            } else {
                res.status(404).json({error:'The book could not be found!'})
            }
        }
    });
}

//Removes a from the database.
exports.deleteBook = function(req, res) {
    Book.findById(req.params.id, function(err, task) {
        if(err) {
            res.status(500).json({error: 'The book could not be returned!'});
        } else {
            if(task) {
                task.remove(function(error) {
                    if(error) {
                        res.json({error: 'The task could not be removed!'});
                    } else {
                        res.json(task);
                    }
                });
            } else {
                res.status(404).json({error: 'The book could not be found!'});
            }
        }
    });
}