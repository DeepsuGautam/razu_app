const { Schema, models, model } = require("mongoose");

const sectionSchema = Schema({
  title: String,
  paragraph: String,
  subtitle:String,
  relation:{
    type:String,
    required:true
  }
});

const sections = models?.section || model("section", sectionSchema);
module.exports = sections;