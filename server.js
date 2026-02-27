const express = require("express");
const mongooose = require('mongoose')

const app = express();
 mongooose.connect("mongodb+srv://tushar-backend:zoA6Nd4NpF8p05IM@cluster0.sgjjbia.mongodb.net/",{
  dbName:"NodeJs Course"
 }

 ).then(()=>{console.log("MongoDb connected..!!!")}).catch
 ((err)=>{
  console.log(err)
 })


const port = 3000;

app.listen(port, (req, res) => {
  console.log("Your Server is ready !!!!");
});
