class Task {
  /**
   *
   * @param {String} name
   * @param {String} content
   * @param {Date} createdDate
   */
  constructor(name, content, createdDate) {
    this.name = name;
    this.content = content;
    this.createdDate = createdDate;
  }
}

module.exports = Task;
