const express = require('express');
require('dotenv').config();

const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>This is Home Directory</h1>");
})


app.listen(process.env.PORT,()=>{
    console.log(`Application is Running on Port no. ${process.env.PORT}`);
})