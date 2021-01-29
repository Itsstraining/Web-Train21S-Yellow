const mongoose = require("mongoose")

taskSchema = new mongoose.Schema({
    name: String,
    content: String,
    createDate: Number,
    deadline: Number,
    status: String,
})

module.exports=taskSchema;