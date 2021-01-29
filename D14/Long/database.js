const mongoose = require("mongoose");
const taskSchema = require("./schemas/task.schema");
const Task = require("./models/task.model");

class Database {
  /**
   * @type {Database}
   */
  static _cache = null;

  constructor(connectionToString) {
    /**
     * @type {String}
     */
    this.connectionToString = connectionToString;

    /**
     * @type {mongoose.Model<any>}
     */
    this.Task = new mongoose.model("tasks", taskSchema);
  }

  /**
   * @returns {Database}
   */
  static get instance() {
    if (this._cache == null) {
      this._cache = new Database("");
    }
    return this._cache;
  }

  /**
   * @returns {connect.connection}
   */
  async connect(connectionToString) {
    this.connectionToString = connectionToString;
    return new Promise((resolve, reject) => {
      mongoose.connect("mongodb://localhost/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      this.connection = mongoose.connection;
      this.connection.on("error", (err) => {
        console.error("Cannot connect to DB");
        reject(err);
      });
      this.connection.once("open"),
        () => {
          console.log("Connect successfully");
          resolve(this.connection);
        };
    });
  }

  /**
   *
   * @param {Task} task
   */
  async createTask(task) {
    await this.Task.create(task);
  }

  async getAllTask() {
    let tasks = [];
    let res = await this.Task.find();
    for (let i = 0; i < res.length; i++) {
      tasks.push(Task(res[i]));
    }
    return tasks;
  }
}

module.exports = Database;
