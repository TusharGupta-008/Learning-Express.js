const express = require("express");
const errorRouter = express.Router();

errorRouter.use((req, res, next) => {
  res.status(404).send(`<h1>Error 404 Page not found</h1>`);
});

module.exports = errorRouter;
