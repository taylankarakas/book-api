const mongoose = require('mongoose');
const uri = 'mongodb+srv://taylan:ImhjIcf5z8aDXMs8@test-db-jcbqz.mongodb.net/test?retryWrites=true';

module.exports = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
        .then(() => console.log('- mongodb connected -'))
        .catch((err) => console.log(err))
}