const express = require("express")
const app = express();

const mongoose = require('mongoose')

let Task;
let taskSchema;


async function connectToDb() {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb+srv://admin:admin@cluster0.ymv7h.mongodb.net/todoApp?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;
        db.on('error', (err) => {
            reject(err)
        });
        db.once('open', function () {
            console.log("we're connected!")
            resolve(db);
        });
    })
}

app.get("/task",async (req,res)=>{
    let result = await Task.find({});
    res.send({
        task: result,
    })
})


async function main() {
    try {
        let db = await connectToDb();
        app.listen(8080, "0.0.0.0", () => {
            console.log(`server is running`)
        })
        taskSchema = new mongoose.Schema({
            name: String,
            content: String,
            createDate: Number,
            deadline: Number,
            status: String,
        })
        Task = mongoose.model("Task", taskSchema);
        Task1 = new Task({
            name: "đi chơi",
            content: "đi Đà Lạt",
            createDate: Date.now(),
            deadline: Date.now() + 1000 * 60 * 60 + 24,
            status: "todo"
        })
        Task.findOne({ 'content': 'đi Đà Lạt' }, function (err, Task) {
            if (err) return handleError(err);
            console.log('%s %s %d %d %s.', Task.name,Task.content,Task.createDate,Task.deadline,Task.status);
          });
        //await Task1.save();
    } catch (error) {
        console.error(error)
    }

}

main()