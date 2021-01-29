const mongoose = require('mongoose');
const jobSchema = require('./schemas/job.schema');

class Database {

    /**
     * 
     * @type {Database}
     */
    static _cache = null;

    constructor(conectionString) {
            /**
             * @type {String}
             */
            this.conectionString = conectionString;
            /**
             * @type {mongoose.model<any>}
             */
            this.Job = mongoose.model("job", jobSchema);
        }
        /**
         * @returns {Database}
         */
    static get instance() {
        if (this._cache == null) {
            this._cache = new Database();
        }
        return this._cache;
    }

    /**
     * @returns {Promise<mongoose.Connection>}
     */
    async connect() {
        return new Promise((resolve, reject) => {
            mongoose.connect(this.conectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            this.connection = mongoose.connection;
            this.connection.on("error", (err) => {
                console.error("Cannot connect to DB");
                reject(err);
            });
            this.connection.once("open", () => {
                console.log("Connect success")
                resolve(this.connection);
            });
        });
    }
}

module.exports = Database;