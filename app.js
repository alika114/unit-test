const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.get('/',(req,res) => {
    res.send("Hello World");
});

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`running in the port : ${port}`);
});

