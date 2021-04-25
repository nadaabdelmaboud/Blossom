const mongoose = require('mongoose')
const FlowerSchema = new mongoose.Schema({

    name : {
        type : String , 
        uinque: true ,
        required : true
    },
    price :{
        type : Number , 
        required : true
    },
    count : {
        sold:Number,
        available:Number
    }, 
    images:[String]


})