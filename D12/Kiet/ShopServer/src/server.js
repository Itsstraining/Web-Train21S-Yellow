const express = require("express")
const database = require("./database")
const bodyParser = require('body-parser');
const Item = require("./models/item.model");
const app = express();
const db = new database();

app.use(bodyParser.json())
app.get("/items",(req,res)=>{
    const {id} = req.query
    if (id != undefined) {
        res.send({
            items:db.getItemById(id)
        })
        return;
    }
    res.send({
        items:db.getAllItems()
    })
})

app.delete("/items",(req,res)=>{
    const {id} = req.query
    if (id != undefined) {
        db.deleteById(id)
        res.send({
            message:`deleted Item[${id}]`
        })
        return;
    }
    try {
        db.deleteAll()
        res.send({
            message:`all items deleted`
        })
    } catch (error) {
        res.send({
            message:`can't delete`
        })
    }
})

app.post("/items",(req,res)=>{
    const {id,name,price,discount} = req.body
    try {
         db.createItem(new Item(id,name,price,discount))
         res.status(201).send({
             message:`Item [${id}] was created`
         })
    } catch (error) {
        res.status(400).send({
            message:`Invalid item`
        })
    }
   
})


module.exports = app;