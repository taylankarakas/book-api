const express = require('express');
const router = express.Router();

// MODEL
const Author = require('../models/Author');

// GET
router.get('/', (req, res) => {
  res.json({ status: 1 })
});

// PUT
router.put('/:author_id', (req, res) => {
  const { author_id } = req.params;
  Author.findByIdAndUpdate(author_id, req.body, { new: true })
    .then((author) => res.json(author))
    .catch((err) => res.json(err))
});

// POST
router.post('/new', (req, res) => {
  const { name, surname, age } = req.body;

  const author = new Author({
    name,
    surname,
    age
  });

  author.save()
    .then((author) => res.json(author))
    .catch((err) => res.json(err))
});

module.exports = router;
