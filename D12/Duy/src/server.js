const express = require("express");
const app = express();
const Database = require("./database");
const ShopItem = require("./models/shop-item.model");
const db = new Database();

const body = require("body-parser");

app.use(body.json());

app.get("/items", (req, res) => {
  const { id } = req.query;
  if (id != undefined) {
    res.send({
      item: db.getItemById(id),
    });
    return;
  }
  res.send({
    items: db.getAllItem(),
  });
});

app.post("/items", (req, res) => {
  const { id, name, price, inStock, discount } = req.body;
  try {
    db.createItem(new ShopItem(id, name, price, inStock, discount));
    res.status(201).send({
      message: `item [${id}] was created`,
    });
  } catch (err) {
    res.status(402).send({
      message: `cannot create [${id}]`,
    });
  }
});

app.delete("/items", (req, res) => {
  const { id } = req.destroy;
  db.deleteItem(ShopItem[item.id]);
  res.status(201).send({
    message: `item deleted`,
  });
});

module.exports = app;
