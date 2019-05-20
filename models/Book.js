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
    author_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    category: {
        required: true,
        type: String
    },
    point: {
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model('book', BookSchema);