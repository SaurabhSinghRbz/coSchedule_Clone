const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
let database = async () => {
    mongoose.connect("mongodb+srv://saurabhSingh:Singh1602@cluster0.czcawgg.mongodb.net/coSchedule?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Connected to database'))
        .catch(err => console.log(err));
}

module.exports = database;
