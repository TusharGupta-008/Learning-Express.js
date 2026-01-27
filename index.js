const express = require ("express");

const app = express();



app.use("/",(req,res,next)=>{
  res.send(`<h1>Welcome to airbnb</h1>`);
  next();

})



const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`Your Server is runnning onhttp://localhost:${PORT}/ `)

})
