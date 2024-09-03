const { Schema, models, model } = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  }
});

const projects = models?.project || model("project", schema);
module.exports = projects;
