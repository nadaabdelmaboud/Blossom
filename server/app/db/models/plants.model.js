const mongoose = require('mongoose')
const PlantSchema = new mongoose.Schema({

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
    info:{
        type:String,
        required:true
    },
    tips:{
        type:String,
        required:true
    },
    images:[String]


})

const PlantModel = mongoose.model('Bouquet',PlantSchema);
module.exports=PlantModel;