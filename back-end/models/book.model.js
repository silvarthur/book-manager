var mongoose = require('mongoose');

//Book Schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    pages: {
        type: String
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

/*
//Gets all the books. This is temporary.
module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}

//Gets book by id. This is temporary.
module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
}

//Adds a book to the database. This is temporary.
module.exports.addBook = function(book, callback) {
    Book.create(book, callback);
}

//Updates a book in the database. This is temporary.
module.exports.updateBook = function(id, book, options, callback) {
    var query = {id: id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages
    }

    Book.findOneAndUpdate(query, update, options, callback);
}

//Removes a from the database. This is temporary.
module.exports.deleteBook = function(id, callback) {
    var query = {id: id};
    Book.remove(query, callback);
}
*/