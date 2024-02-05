require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Aniruddha Roy");
});

app.get("/heading", (req, res) => {
  res.send("<h1>This is a heading</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
