const mongoose = require('mongoose')
let categories = ['BabyOrchid','Cabbage','Chrysanthemums','Eucalyptus','Gerbera','Roses','Lilies','Spider','Tulips'];
let sentiments = ['I Love You','I Miss You','Congratulations','Get Well Soon','Happy Anniversary','Happy Birthday','I Am Sorry','Thank You','Wedding'];
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
    bouquetCategory:{
        type:String,
        enum:categories,
        required:true
    },
    bouquetSentiment:{
        type:String,
        enum:sentiments,
        required:true
    },
    images:{
        type:String,
        required:true
    }


})


const BouquetModel = mongoose.model('Bouquet',BouquetSchema);
module.exports={BouquetModel,categories,sentiments};