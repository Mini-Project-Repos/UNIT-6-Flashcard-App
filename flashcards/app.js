const express = require("express");

const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello JS Developer!</h1>");
});

//   process.env.PORT, process.env.IP
app.listen(3000, () => {
  console.log("The app has started!");
});
