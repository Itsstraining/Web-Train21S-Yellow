const ShopItem = require('./models/shop-item.model');

class Database{
    constructor(){
        this.items = [];
        this.carts = [];
    }
    /**
     * 
     * @param {ShopItem} item 
     */
    createItem(item){
        this.items.push(item);
    }

    /**
     * @returns  {Array<ShopItem>} Shop items
     */
    getAllItem(){
        return this.items;
    }

    /**
     * 
     * @param {string} id 
     * @returns {ShopItem} Found item
     */

    getItemById(id){
        for(let i=0;i<this.items.length; i++){
            if(this.items[i].id==id){
                return this.items[i];
            }
        }
    }

    deleteItemById(id){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i].id==id){
                return this.items.splice[i,1];
            }
        }
    }
}

module.exports = Database;