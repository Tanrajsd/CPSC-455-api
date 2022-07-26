var express = require("express");
const Recipe = require("../models/recipeModel");
var router = express.Router();

router.get("/", async function (req, res, next) {
  const recipeList = await Recipe.find({}, { _id: 0, __v: 0 });

  res.send({ message: "recipes successfully recieved", recipes: recipeList });
});

router.post("/", function (req, res, next) {
  try {
    const newRecipe = new Recipe(req.body);
    newRecipe.save();
    res.send({ message: "Recipe successfully created", recipe: req.body });
  } catch (err) {
    res
      .status(400)
      .send({ message: "Recipe was not unable to be created", error: err });
  }
});

router.delete("/:id", async function (req, res, next) {
  let newList = [];
  try {
    await Recipe.deleteOne({ name: req.params.id });
    newList = await Recipe.find({}, { _id: 0, __v: 0 });
  } catch (err) {
    res
      .status(400)
      .send({ message: "Recipe was not unable to be deleted", error: err });
  }
  res.send({ message: "Recipe successfully deleted", recipes: newList });
});

module.exports = router;
