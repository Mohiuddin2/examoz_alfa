const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating Schema
const questionSchema = new Schema({
  name: String,
  
});

module.exports = mongoose.model("Question", questionSchema);
