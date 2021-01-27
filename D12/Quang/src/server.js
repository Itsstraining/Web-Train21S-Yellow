const bodyParser = require('body-parser');
const express = require("express");
const Database = require("./database")
const ShopItem = require("./models/shop-item.model")


const app = express();
const db = new Database();

app.use(bodyParser.json());


app.get("/items", (req, res) => {
    const { id } = req.query;
    if (id != undefined) {
        res.send({
            item: db.getItemById(id)
        });
        return;
    }
    res.send({
        item: db.getAllItems(),
    });
});

app.post("/items", (req, res) => {
    const { id, name, price, inStock } = req.body;
    try {
        db.createItem(new ShopItem(id, name, price, inStock));
        res.send({
            message: `Item [${id}] was created bruhh bruhh`
        });
    } catch (err) {
        res.status(400).send({
            message: "Invalid item",
        });
    }
});

app.delete("/item", (req, res) => {
    const { id, name, price, inStock } = req.body;
    try {
        db.deleteItem(id, name, price, inStock);
        res.send({
            message: `Item [${id}] was deleted bruhh bruhh`
        });
    } catch (err) {
        res.status(400).send({
            message: "Delete fail",
        });
    }
});

module.exports = app;