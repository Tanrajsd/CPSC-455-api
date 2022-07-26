const mongoose = require("mongoose");

// create schema
const recipeSchema = new mongoose.Schema({
  id: String,
  name: String,
  ingredients: String,
  instructions: String,
});

// create model
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
