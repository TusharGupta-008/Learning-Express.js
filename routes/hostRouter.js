const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/enquiry", (req, res, next) => {
  res.send(`
    <form action = "/enquiry-completed" method= "POST">
    <input type="text" name="username" placeholder="Enter your name" required />
    <br><br>
    <input type = "submit" value="Submit">
    </form>

   
    `);
});
hostRouter.post("/enquiry-completed", (req, res, next) => {
  console.log(req.body);
  res.send(`<h3> We got your details
    </h3>
    <a href = "/">Home</a>
    
    `);
});

module.exports = hostRouter;
