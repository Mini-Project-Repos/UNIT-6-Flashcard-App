const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

//forms encode data the same way that URL's to do so you need to use urlencoded method and set its extensions to false
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug");

//import routes to be used in app.js
const mainRoutes = require("./routes");
const cardRoutes = require("./routes/cards");

app.use(mainRoutes);
app.use("/cards", cardRoutes);

// app.use((req, res, next) => {
//   //.message has no special meaning, it could be named anything
//   const err = new Error("whoopsies!");
//   err.status = 500;
//   next(err);
// });

app.use((req, res, next) => {
  //the request object is passed through the next function, that is why you can call req.message in a separate function and get the value
  next();
});

//404 Page
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  //the err param will contain data on the error itself which can be passed into the template
  res.locals.error = err;
  //sends the error status code to the server
  res.status(err.status);
  //renders the error template and passes the err info to the template
  res.render("error", err);
});

//   process.env.PORT, process.env.IP
app.listen(3000, () => {
  console.log("The app has started!");
});
