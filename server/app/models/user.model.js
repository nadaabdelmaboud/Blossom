const { Router } = require('express')
const mongoose = require('mongoose')
const Address = {
    country : String,
    city: String ,
    street : String , 
    buildingNo: Number , 
    apartmentNo: Number 
}
const UserSchema = new mongoose.Schema({

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
    },
    userType : {
        type : String,
        enum : ["user","admin"],
        required : true
    },
    address : {
        type : Address ,
        require:true
    },
    phone:{
        type : String,
        required : true
    } , 
    creditCard: {
        cardNumber:Number,
        ccNumber:Number,
        expireDate:Date
    } ,
    Cart : [
        {
            orders : [{
                flowerId : {
                    type : mongoose.Schema.Types.ObjectId,
                    required : true,
                    ref : 'Flower'
                },
                amount : {
                    type : Number ,
                    required : true
                }
            }]  ,
            status : {
                type : String , 
                enum : ["pending","progress","delivered"],
                required : true
            } ,
            address : {
                type: Address , 
                required:true
            },
            deliveryDate :  {
                type :Date
            },
            lastEdit: {
                type : Date
            } ,
            feedback:{
                comment : String , 
                rate: Number ,
                feedbackDate : Date 
            }
    
        }
    ]


})