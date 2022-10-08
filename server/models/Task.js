const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String },
    email: { type: String, required: true },
    subTasks: { type: Array, required: false },
}, { timestamps: true });


module.exports = mongoose.model('Task', Task);