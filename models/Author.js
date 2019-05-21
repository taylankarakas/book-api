const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: String,
    age: {
        default: 0,
        type: Number
    },
    avatar: {
        type: String,
        default: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
});

module.exports = mongoose.model('authors', AuthorSchema);