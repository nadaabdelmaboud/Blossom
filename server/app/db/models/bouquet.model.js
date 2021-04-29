const mongoose = require('mongoose')
const BouquetSchema = new mongoose.Schema({

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
    images:[String]


})

const BouquetModel = mongoose.model('Bouquet',BouquetSchema);
module.exports=BouquetModel;