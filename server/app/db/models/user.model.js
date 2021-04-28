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
                bouquetId : {
                    type : mongoose.Schema.Types.ObjectId,
                    required : true,
                    ref : 'Bouquet'
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

const UserModel = mongoose.model('User',UserSchema);
module.exports=UserModel;