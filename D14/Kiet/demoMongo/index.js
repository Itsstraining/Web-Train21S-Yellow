const app = require("./server");

const mongoose = require('mongoose')
const database = require('./database')
const task = require("./models/task-model")
const taskSchema = require("./schemas/task-schema");
const Database = require("./database");

// 
// async function connectToDb() {
//     return new Promise((resolve, reject) => {
//         mongoose.connect("mongodb+srv://admin:admin@cluster0.ymv7h.mongodb.net/todoApp?retryWrites=true&w=majority", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         const db = mongoose.connection;
//         db.on('error', (err) => {
//             reject(err)
//         });
//         db.once('open', function () {
//             console.log("we're connected!")
//             resolve(db);
//         });
//     })
// }

// app.get("/task",async (req,res)=>{
//     let result = await Task.find({});
//     res.send({
//         task: result,
//     })
// })


async function main() {
    try {
        await Database.instance.connectToDb("mongodb+srv://admin:admin@cluster0.ymv7h.mongodb.net/todoApp?retryWrites=true&w=majority")
        //await db.connectToDb("mongodb+srv://admin:admin@cluster0.ymv7h.mongodb.net/todoApp?retryWrites=true&w=majority");
        app.listen(8080, "0.0.0.0", () => {
            console.log(`server is running`)
        })
        
        // Task1 = new task({
        //     name: "đi chơi",
        //     content: "đi Đà Lạt",
        //     createDate: Date.now(),
        //     deadline: Date.now() + 1000 * 60 * 60 + 24,
        //     status: "todo"
        // })
        // task.findOne({ 'content': 'đi Đà Lạt' }, function (err, task) {
        //     if (err) return handleError(err);
        //     console.log('%s %s %d %d %s.', task.name,task.content,task.createDate,task.deadline,task.status);
        //   });
        //await Task1.save();
    } catch (error) {
        console.error(error)
    }

}

main()