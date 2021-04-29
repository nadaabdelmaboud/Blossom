const UserModel = require('../models/user.model');
const client = require('../db.caching');
const bcrypt = require('bcrypt')
const User = {
    async findUserById(id,projection={_id:1}){
        const user = await UserModel.findById(id,projection);
        return user;
    },
    async findUserByEmail(email,projection={_id:1}){
        const user =  await UserModel.findOne({email:email},projection);
        return user;
    },
    async comparePassword(user,password){
        const checkUser = await user.comparePassword(password);
        if(checkUser)return true;
        else return false;
    },
    async createUser(user){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);        
        const newUser = new UserModel({
            name : user.name,
            email : user.email,
            password : hash,
            address :user.address,
            phone:user.phone , 
            creditCard: {
                cardNumber:0,
                ccNumber:0,
                expireDate:null
            } ,
            Cart : []
        })
      const userObject=await newUser.save();
      if(userObject){
          return {_id:userObject._id};
      }
      return false;
    }


}
module.exports=User;