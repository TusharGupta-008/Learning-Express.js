const express = require("express");
const mongooose = require("mongoose");
const path = require('path')
const userModel = require("./Models/User.model");



const app = express();


app.set("view engine", "ejs");

mongooose
  .connect(
    "mongodb+srv://tushar-backend:zoA6Nd4NpF8p05IM@cluster0.sgjjbia.mongodb.net/",
    {
      dbName: "NodeJs_Course",
    },
  )
  .then(() => {
    console.log("MongoDb connected..!!!");
  })
  .catch((err) => {
    console.log(err);
  });

const url = path.join(path.resolve(),"index")

app.get("/", (req, res) => {
  res.render("index")
});

app.listen(3000, (req, res) => {
  console.log("Your Server is ready !!!!")
});
