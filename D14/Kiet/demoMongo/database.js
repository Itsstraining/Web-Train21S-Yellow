const mongoose = require('mongoose')
const taskSchema = require('./schemas/task-schema')
const Task = require("./models/task-model")
class Database{
    /**
     * @type {Database}
     */
    static _cache = null;


    constructor(connectionString){
        /**
         * @type {string}
         */
        this.connectionString = connectionString;
        /**
         * @type {mongoose.Model<any>}
         */
        this.Task = mongoose.model("Task",taskSchema)
    }
    
    static get instance(){
        if (this._cache == null) {
            this._cache = new Database("");
        }return this._cache;
    }

    /**
     * 
     * @param {String} connectionString 
     */
    async connectToDb(connectionString) {
        return new Promise((resolve, reject) => {
            mongoose.connect(connectionString, {
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
    /**
     * 
     * @param {Task} task 
     */
    createTask(task) {
        return this.Task.create(task)
    }

    async getAllTask(){
        return await this.Task.find()
    }
}
module.exports = Database;