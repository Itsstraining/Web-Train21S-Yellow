const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:admin@cluster0.ijy8j.mongodb.net/tododb?retryWrites=true&w=majority";

let taskSchema;
let Task;

async function ConnectToDB() {
  return new Promise((resolve, reject) => {
    mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", (err) => {
      reject(err);
    });
    db.once("open", () => {
      console.log("connection successfully");
      resolve(db);
    });
  });
}

async function main() {
  try {
    let db = await ConnectToDB();
    app.get("/task", async (req, res) => {
      let result = await Task.find({});
      res.send({
        tasks: result,
      });
    });
    app.listen(8080, "0.0.0.0", () => {
      console.log("server is running...");
    });

    taskSchema = new mongoose.Schema({
      name: String,
      content: String,
      createdDate: Number,
    });
    Task = mongoose.model("tasks", taskSchema);

    task01 = new Task({
      name: "di cho",
      content: "mua do an",
      createdDate: Date.now(),
    });

    let result = await Task.findOne({
      name: "di cho",
    });

    await task01.save();
  } catch (err) {
    console.log(err);
  }
}

main();
