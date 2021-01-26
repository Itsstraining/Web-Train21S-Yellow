const express = require('express')
const app = express();

app.get('/', (req, res) =>{
    let {a ,b} = req.query;
    let tong = parseInt(a) + parseInt(b);
    res.send({tong: tong});
})



app.listen('7200', ()=>{
    console.log('server is running');
})