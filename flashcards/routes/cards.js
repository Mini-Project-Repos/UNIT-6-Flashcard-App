const express = require("express");

//A router is like a mini app in express, you can add routes and middleware to it
const router = express.Router();
const { data } = require("../data/flashcardData.json");

//{data} is equivalent to data = require("../data/flashcardData.json").data;
const { cards } = data;
//{cards} is equivalent to cards = data.cards;

//Since every route directed to this routes file will have the /cards/.. you don't need to explicitly put in the router.get below
/*"/:id" the ":"is basically treating the route as a var and then passing "id" constitutes a "route parameter"
ex. www.website.com/cards/3 OR www.website.com/cards/2. The 2 and 3 constitute the id param

*/
router.get("/:id", (req, res) => {
  let { side } = req.query;
  console.log(side);
  const { id } = req.params;
  console.log(id);
  if (!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }
  const name = req.cookies.username;
  const text = cards[id][side];
  console.log(text);
  const { hint } = cards[id];
  let templateData;

  if (side === "question") {
    side = "answer";
    templateData = { id, side, text, hint, name };
  } else {
    side = "question";
    templateData = { id, text, name, side };
  }
  console.log(templateData);
  res.render("card", templateData);
});

router.get("/", (req, res) => {
  const randomNum = Math.floor(Math.random() * cards.length);
  const card = cards[randomNum];
  const id = randomNum;
  res.redirect(`/cards/${id}?side=question`);
});

//exports the router routes
module.exports = router;
