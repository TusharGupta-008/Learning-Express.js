const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const errorRouter = require("./routes/error");

const app = express();
app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);
app.use(errorRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Your Server is runnning onhttp://localhost:${PORT}/ `);
});
