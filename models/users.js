const { Schema, models, model } = require("mongoose");

const schema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },password:{
        type:String,
        required:true
    },role:{
        type:String,
        required:true,
        enum:["admin", "user"],
        default:"user"
    }
});

const users = models?.user || model("user", schema);
module.exports = users