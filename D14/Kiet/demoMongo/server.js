const express = require("express")
const bodyParser = require('body-parser');
const Database = require("./database");
const Task = require("./models/task-model")

const app = express();
app.use(bodyParser.json()) 
app.get("/task",async (req,res)=>{
    let result = await Database.instance.getAllTask();
    res.send({
        Task: result,
    })
})

app.post("/task",async (req,res)=>{
    const {name,content,createDate,deadline,status} = req.body
    await Database.instance.createTask(new Task(name,content,createDate,deadline,status))
    res.send({
        message:`created ${name}`
    })
})



module.exports= app