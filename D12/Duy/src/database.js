const ShopItem = require("./models/shop-item.model");

class Database {
  constructor() {
    this.items = [];
    this.carts = [];
  }
  /**
   *@returns{Array<ShopItem>}
   * @param {ShopItem} item
   */
  createItem(item) {
    this.items.push(item);
  }

  deleteItem(item) {
    this.items.pop(item);
  }

  getAllItem() {
    return this.items;
  }
  /**
   *
   * @param {ShopItem} id
   * @returns{ShopItem} Found Item
   */
  getItemById(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == id) {
        return this.items[i];
      }
    }
  }
}
module.exports = Database;
