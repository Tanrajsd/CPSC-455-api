var express = require("express");
const User = require("../models/userModel");
var router = express.Router();

router.post("/", async function (req, res, next) {
  const users = await User.find({}, { _id: 0, __v: 0 });
  const user = users[0];

  if (req.body.password === user.password) {
    res.send({ message: "Login successful", valid: true });
    return;
  } else {
    res.send({ message: "Incorrect password", valid: false });
    return;
  }
});

module.exports = router;
