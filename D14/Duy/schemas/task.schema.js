const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: String,
  content: String,
  createdDate: Number,
});

module.exports = taskSchema;
