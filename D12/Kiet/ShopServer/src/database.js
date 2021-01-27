const Item = require("../src/models/item.model")

class database{
   
    constructor(){
        this.items = []
        this.carts = []
    }
    /**
     * 
     * @param {Item} item 
     */
    createItem(item){
        this.items.push(item);
    }


    /**
     * @returns {Array<item>} Items
     */
    getAllItems(){
        return this.items;
    }
    /**
     * 
     * @param {string} id 
     * @returns {item} item
     */
    getItemById(id){
        for (let i = 0; i< this.items.length; i++) {
          if (id == this.items[i].id) {
              return this.items[i];
          }

        }
    }
    deleteAll(){
        return this.items.length = 0;
    }

    deleteById(id){
        for (let i = 0; i < this.items.length; i++) {
            if (id == this.items[i].id) {
                return this.items.splice(i,1);
            }
  
            
        }
    }
    

}
module.exports = database