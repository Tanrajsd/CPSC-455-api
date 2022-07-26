var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var recipeRouter = require("./routes/recipe");
var loginRouter = require("./routes/login");
const mongoose = require("mongoose");

const generateData = require("./generate-data");

var app = express();

mongoose.connect(
  "mongodb+srv://tanraj:Tangradetwo@cluster0.y5s6z.mongodb.net/CPSC455?retryWrites=true&w=majority"
);
generateData();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/recipe", recipeRouter);
app.use("/login", loginRouter);

module.exports = app;
