const express = require("express");
const bodyParser = require("body-parser");
const Database = require("./database");
const Task = require("./models/task.model");
const app = express();

app.use(bodyParser.json());

app.post("/tasks", async (req, res) => {
  const { name, description, createdDate } = req.body;
  await Database.instance.createTask(new Task(name, description, createdDate));
  res.send({ message: `Created [${name}]` });
});

module.exports = app;
