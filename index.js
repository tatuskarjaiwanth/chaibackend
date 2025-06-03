require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

var myjson = {
  name: "jaiwanth",
  age: 20,
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("X.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur Code</h2>");
});

app.get("/json_data", (req, res) => {
  res.json(myjson);
});

app.listen(process.env.PORT, () => {
  console.log(`Example listening at the port ${port}`);
});
