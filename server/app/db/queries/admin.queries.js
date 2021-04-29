const client = require('../db.caching');
const bcrypt = require('bcrypt')
const Admin = {
    async findAdminById(id){
        const user = await UserModel.findById(id);
        return user;
    },

}
module.exports=Admin