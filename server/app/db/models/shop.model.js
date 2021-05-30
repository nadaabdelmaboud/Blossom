const mongoose = require('mongoose')
const ShopSchema = new mongoose.Schema({
    admin:
    {
        name : {
            type:String,
            required: true
        },
        email : {
            type:String,
            required: true,
            unique : true
    
        },
        password : {
            type : String,
            required : true
        }
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    plantCategories: [],
    bouquetCategories:[],
    bouquetSentiments:[]
},{collection:"Shop"});

const ShopModel = mongoose.model('Shop',ShopSchema);
module.exports=ShopModel;