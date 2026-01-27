const express = require("express");
const app = express();

const Port = 3000;


app.use((req, res, next) => {
  console.log("Coming in first middleware", req.url, res.url);
  next();
});
app.use((req, res, next) => {
  console.log("Coming in Second middleware", req.url, res.url);
  next();
});


app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`);
});
