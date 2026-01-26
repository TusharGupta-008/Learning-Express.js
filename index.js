const express = require("express");
const app = express();

const Port = 3000;

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`);
});

