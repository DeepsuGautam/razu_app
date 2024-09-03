const { Schema, models, model } = require("mongoose");

const schema = new Schema({
   name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
},{timeseries:true, timestamps:true});

const contact = models?.contact || model("contact", schema);
module.exports = contact;
