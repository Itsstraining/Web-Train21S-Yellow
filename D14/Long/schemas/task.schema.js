import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdDate: Date.now,
});

module.exports = taskSchema;
