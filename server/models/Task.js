const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    color: { type: String,default: "white" },
    email: { type: String, required: true },
    subTasks: { type: Array, required: false },
    date: { type: String, required: false },
    refNO: { type: String, required: false },
},{ versionKey: false});


module.exports = mongoose.model('Task', Task);