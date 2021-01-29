const mongoose = require('mongoose')
const taskSchema = require('../schemas/task-schema')
//const mongoose = require('mongoose')

class Task {
    constructor(name, content, createDate, deadline, status) {
        this.name = name,
        this.content = content,
        this.createDate = createDate,
        this.deadline = deadline,
        this.status = status
    }
}

//task = mongoose.model('Task', taskSchema)


module.exports = Task