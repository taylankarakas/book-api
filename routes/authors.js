const express = require('express');
const router = express.Router();

// MODEL
const Author = require('../models/Author');

// GET
router.get('/', (req, res) => {
  Author.aggregate([
    {
      $lookup: {
        from: 'books',
        localField: '_id',
        foreignField: 'author_id',
        as: 'books'
      }
    },
    {
      $unwind: {
        path: '$books',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          age: '$age',
          name: '$name',
          surname: '$surname'
        },
        books: {
          $push: '$books'
        }
      }
    },
    {
      $project: {
        _id: '$_id._id',
        age: '$_id.age',
        name: '$_id.name',
        surname: '$_id.surname',
        books: '$books'
      }
    }
  ])
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
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
  const { name, surname, age, avatar } = req.body;

  const author = new Author({
    name,
    surname,
    age,
    avatar
  });

  author.save()
    .then((author) => res.json(author))
    .catch((err) => res.json(err))
});

module.exports = router;
