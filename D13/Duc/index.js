const express = require("express");
const app = express();
const mongoose = require("mongoose")

const connectString = "mongodb+srv://admin:admin@cluster0.wwlfm.mongodb.net/ToDoDB?retryWrites=true&w=majority";

mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true });
/**
 * @returns {Promise<mongoose.Collection>}
 */
function connectDB() {
    return new Promise((res, rej) => {
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {
            console.log('DB is connecting')
            res(db)
        });
    })
}

async function main() {
    try {
        let db = await connectDB()
        app.listen((7009), () => {
            console.log('Server is running......')
        })

        const taskSchema = new mongoose.Schema({
            nameTask: String,
            startTime: Number,
            endTime: Number,
            deadLine: Number,
            status: String,

        });
        const Task = mongoose.model("tasks", taskSchema)

        const TaskD12 = new Task({
            nameTask: 'String',
            startTime: 123,
            endTime: 123,
            deadLine: 123,
            status: 'String'
        });
        await TaskD12.save()

    } catch (error) {
        console.log(error)
    }
}

main()
