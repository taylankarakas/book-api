const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        required: true,
        type: String,
        unique: true
    },
    year: {
        type: Number,
        required: true
    },
    publisher: String,
    category: {
        required: true,
        type: String
    },
    point: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('book', BookSchema);