const express = require("express");

const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cards", (req, res) => {
  // res.locals.prompt = "Who is buried in Grant's Tomb?"
  res.render("card", {
    prompt: "Who is buried in Grant's Tomb?",
    hint: "Think about whose tomb it is."
  });
});

//   process.env.PORT, process.env.IP
app.listen(3000, () => {
  console.log("The app has started!");
});
