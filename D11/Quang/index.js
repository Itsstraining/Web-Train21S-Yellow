const express = require("express");

const app = express();

app.get("/hi", (require, response) => {
    console.log("Đang gọi nha");
    response.send(
        `<h1>Hello Friends</h1>
        `);
});

app.get("/tong", (require, response) => {
    const { a, b } = require.query;
    let resutl = parseFloat(a) + parseFloat(b);
    response.send({
        resutl: resutl,
    });
});

app.listen(1234, () => {
    console.log("Đang chạy nha");
});