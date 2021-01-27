class Item {
    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {number} price 
     * @param {number} discount 
     */
    constructor(id, name, price, discount) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
}
module.exports = Item