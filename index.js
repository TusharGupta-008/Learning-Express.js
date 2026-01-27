const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter")

const app = express();
app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
  res.status(404).send(`<h1>Error 404 Page not found</h1>`)
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Your Server is runnning onhttp://localhost:${PORT}/ `);
});
