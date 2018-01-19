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

//Get all the books. This is temporary.
module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}

//Get book by id. This is temporary.
module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
}