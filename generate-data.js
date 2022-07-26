const Recipe = require("./models/recipeModel");
const User = require("./models/userModel");

function generateData() {
  // make a sandwich
  const ChocolateChipCookies = new Recipe({
    id: "Chocolate Chip Cookies",
    name: "Chocolate Chip Cookies",
    ingredients:
      "1 cup of butter, 1 cup of sugar, 2 eggs, 1 teaspoon of baking soda, 1 teaspoon of salt, 2 cups of chocolate chips",
    instructions:
      "First mix all the dry ingredients together and then add in the wet ingredients. Next put the cookies into the oven at 375 degrees for 15 minutes",
    time: "30m",
  });
  const Admin = new User({
    username: "tanraj",
    password: "opensesame",
  });
  const Admin2 = new User({
    username: "tanraj2",
    password: "opensesame2",
  });

  // Save a sandwich to db
  ChocolateChipCookies.save();
  Admin.save();
  Admin2.save();
}

module.exports = generateData;
