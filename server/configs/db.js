const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
let database = async () => {
    mongoose.connect("mongodb+srv://saurabh:saurabh@cluster0.m7gkqr4.mongodb.net/blog?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Connected to database'))
        .catch(err => console.log(err));
}

module.exports = database;
