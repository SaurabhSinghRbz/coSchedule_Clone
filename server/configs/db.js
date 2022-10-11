const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
let database = async () => {
    mongoose.connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Connected to database'))
        .catch(err => console.log(err));
}

module.exports = database;
