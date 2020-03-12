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
router.get("/cards:id", (req, res) => {
  // res.locals.prompt = "Who is buried in Grant's Tomb?"
  res.render("card", {
    //the params is the additional info added to the get route above(:id) and id is the name of those params being passed in
    /*the id is taking what is being added on the url and passing it in. In this case, we are looking for the id(see JSON) 
      of the different cards(0,1,2,3,etc)
      */
    prompt: cards[req.params.id].question,
    hint: cards[req.params.id].hint
  });
});

//exports the router routes
module.exports = router;
