const express = require('express');
const router = express.Router();

// Model
const Book = require('../models/Book');

// GET
router.get('/', function(req, res, next) {
  Book.find({  })
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});

// GET TOP 10 LIST
router.get('/top10', (req, res) => {
  Book.find({  }).sort({ point: -1 }).limit(10)
    .then((list) => res.json(list))
    .catch((err) => res.json(err))
});

// GET FIRST YEAR - LAST YEAR BOOK LIST
router.get('/between/:start_year/:end_year', (req, res) => {
  const { start_year, end_year } = req.params;
  Book.find()
})

// PUT
router.put('/:book_id', (req, res) => {
  const { book_id } = req.params;

  Book.findByIdAndUpdate(book_id, req.body, { new: true })
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});

// DELETE
router.delete('/:book_id', (req, res) => {
  const { book_id } = req.params;

  Book.findByIdAndRemove(book_id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});

// POST
router.post('/new', (req, res) => {
  const { title, year, publisher, category, point } = req.body;
  const book = new Book({
    title,
    year,
    publisher,
    category,
    point
  });

  book.save()
    .then((book) => res.json(book))
    .catch((err) => res.json(err))
});

module.exports = router;
