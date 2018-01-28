var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var Book = require('../models/book.model');
var controller = require('../controllers/book.controller');

router.get('/book', controller.getAllBooks);
router.get('/book/:id', controller.getBookById);

router.post('/book', controller.addBook);

router.put('/book/:id', controller.updateBook);

router.delete('/book/:id', controller.deleteBook);

module.exports = router;