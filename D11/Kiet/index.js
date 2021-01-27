const express = require("express")
const app = express();

app.get("",(req,res)=>{
    res.send("Ni Hạo")
})

app.get("/tinhtong",(req,res)=>{
    const {num1,num2} = req.query;
    let tong = parseInt(num1)+parseInt(num2);
    //res.send({tong:tong});
    res.send(`${tong}`);
})

app.listen(8989,()=>{
    console.log("server is running")
})