const AuthValidation = require('../validation/auth.validation')
const User = require('../db/queries/user.queries')
const jwt = require('jsonwebtoken')
const error = require('../validation/error');

const AuthService={

    async login(user){
        const isValidData = AuthValidation.login(user);
        if(!isValidData) return {token:false,err:error("Not valid data",400)}
        const userObject = await User.findUserByEmail(user.email,{_id:1,password:1});
        if(!userObject) return {token:false,err:error("Invalid Email",404)}
        const checkPassword = await User.comparePassword(userObject,user.password)
        if(!checkPassword)  return {token:false,err:error("Invalid Password",404)}
        const token = await jwt.sign({_id:userObject._id}, process.env.JWT_SECRET_KEY, { expiresIn: '123456789' });
        return {token:token,err:''};
    },
    async signUp(user){
        const isValidData = AuthValidation.signUp(user);
        if(!isValidData) return {token:false,err:error("Not valid data",400)}
        let userObject = await User.findUserByEmail(user.email,{_id:1});
        if(userObject) return {token:false,err:error("User already has an account",403)}
        userObject  = await User.createUser(user);
        const token = await jwt.sign(userObject, process.env.JWT_SECRET_KEY, { expiresIn: '123456789' });
        return {token:token,err:''};
    }
}
module.exports=AuthService;