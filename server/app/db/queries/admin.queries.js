const AdminModel = require('../models/admin.model')
const client = require('../db.caching');
const bcrypt = require('bcrypt');
const Admin = {
    async findAdminById(id){
        const user = await AdminModel.findById(id);
        return user;
    },
    async findAdminByEmail(email){
        const user =  await AdminModel.findOne({email:email},{_id:1,password:1});
        return user;
    },
    async comparePassword(admin,password){
        const checkUser = await admin.comparePassword(password);
        if(checkUser)return true;
        else return false;
    },
    async createAdmin(admin){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(admin.password, salt);        
        const newAdmin = new AdminModel({
            name : admin.name,
            email : admin.email,
            password : hash,
        })
      await newAdmin.save();
    }
}

module.exports=Admin