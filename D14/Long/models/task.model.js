class Task {
  /**
   *
   * @param {String} name
   * @param {String} description
   * @param {Date} createdDate
   */
  constructor(name, description, createdDate) {
    this.name = name;
    this.description = description;
    this.createdDate = createdDate;
  }
}

module.exports = Task;
