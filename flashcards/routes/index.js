const express = require("express");

//A router is like a mini app in express, you can add routes and middleware to it
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (!name) {
    res.redirect("hello");
  } else {
    res.render("index", { name });
  }
});

router.get("/hello", (req, res) => {
  const name = req.body.username;
  if (!name) {
    res.render("hello");
  } else {
    res.render("/");
  }
});

/*The curly brackets indicate an object. 
  Inside the object you need to assign key/value pair(s). 
  In this example, the name of the property being passed in is name and its value is the 
  request bodies(what was submitted via POST request in the form see: hello.pug for more details) username 
  */
router.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

router.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("hello");
});

//export router
module.exports = router;
