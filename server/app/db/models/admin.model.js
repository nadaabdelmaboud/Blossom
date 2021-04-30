const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const AdminSchema = new mongoose.Schema({
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
});
AdminSchema.methods.comparePassword=async function(password){
    const match = await bcrypt.compare(password, this.password);
    if(match) {
        return true;
    }
    return false;
};
const AdminModel = mongoose.model('Admin',AdminSchema);
module.exports=AdminModel;