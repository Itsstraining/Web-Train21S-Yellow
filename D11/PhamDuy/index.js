const express = require("express");
const app = express();

app.get("/tinhtong", (req, res) => {
  let { a, b } = req.query;
  let tong = parseInt(a) + parseInt(b);
  res.send({ tong: tong });
});

app.listen(8080, () => {
  console.log("Server is online...");
});
