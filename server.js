const express = require("express")
const path = require("path")

const app = express()



app.get("/",(req,res)=>{
  // res.send("<h1>Helooo</h1>")

  // const dir = path.resolve();
  

  // const url = path.join(path.resolve(),("./index.html"))
  // console.log("Full path: ",url)

  // res.sendFile(url)
  let name = "pragya";

  res.render('index.ejs', {name})
})










const port = 3000

app.listen(port,(req,res)=>{
  console.log("Your Server is ready !!!!")
})