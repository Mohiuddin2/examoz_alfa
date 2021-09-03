const express = require("express");
const app = express();
const { Mongoose } = require("mongoose");
const mongoose = require("mongoose"); // npm i mongoose then require
const ejsMate = require("ejs-mate");
const path = require("path");
const Question = require("./models/question");

app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs"); // setting ejs view engine
app.set("views", path.join(__dirname, "views"));

// connect mongodb
mongoose
  .connect(
    "mongodb+srv://Mohammed1:VjlscZOm2RaljWVm@cluster0.fbd4k.mongodb.net/examoz?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongo Connection is Open!");
  })
  .catch((err) => {
    console.log("Mongo Connection error");
    console.log(err);
  });
                              // it is connected!! 
// Serving Home page
app.get("/", (req, res) => {
  res.render("./home");
});

// serving test_built
app.get("/build_test", (req, res) => {
  res.render("examoz/build_test");
});
// create test
app.get("/create_test", (req, res) => {
  res.render("examoz/create_test");
});
// add a quesion
app.get("/question", (req, res) => {
  res.render("examoz/question");
});

// app .post to submit the new product mongo
app.post("/question_ready", async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  console.log(question);
  // res.redirect(`/products/${newProduct._id}`);
});
app.listen(5000, () => {
  console.log("Server Started on Port 5000");
});
