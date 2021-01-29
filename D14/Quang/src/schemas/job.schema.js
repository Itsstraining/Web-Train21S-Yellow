const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: String,
    content: String,
    createdDate: Number,
    deadline: Number,
    priority: Number
});

module.exports = jobSchema;