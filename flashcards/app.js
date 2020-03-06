const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("I love Treehouse!");
});

app.listen(process.env.PORT, process.env.IP, () => {
  console.log("The app has started!");
});
