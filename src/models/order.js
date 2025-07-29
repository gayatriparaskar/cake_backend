const express = require ("express")
const mongoose = require("mongoose")

const userOrderSchema = new mongoose.Schema({
    name:{type:String , required:true},
    phone_number:{type:Number, required:true},
    cakeType:{type:String},
    quantity:{type:Number},
    date:{type : Date},
    message:{type:String},
    address:{type:String},
},{
  timestamps: true
});

const userOrderModel = new mongoose.model("orders",userOrderSchema);

module.exports = userOrderModel;