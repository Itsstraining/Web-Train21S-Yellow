const mongoose = require("mongoose");
const Task = require("../models/task.model");
const taskSchema = require("../schemas/task.schema");

class Database {
  /**
   * @type {Database}
   */
  static _cache = null;

  constructor(connectionString) {
    /**
     * @type {String}
     */
    this.connectionString = connectionString;

    /**
     * @type {mongoose.Model<any>}
     */

    const Task = mongoose.model("tasks", taskSchema);
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

  async connect(connectionString) {
    this.connectionString = connectionString;
    return new Promise((resolve, reject) => {
      mongoose.connect(this.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = mongoose.connection;
      db.on("error", (err) => {
        reject(err);
      });
      db.once("open", () => {
        console.log("connection to database successfully");
        resolve(db);
      });
    });
  }

  /**
   * @param {Task} tasks
   */

  async getAllTask() {
    let tasks = await this.Task.find();
  }

  async createTeask(task) {
    await this.Task.create(task);
  }
}
module.exports = Database;
