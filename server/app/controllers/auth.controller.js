const AuthService = require('../services/auth.service')
const AuthController = {

    async login(req,res){
        const user = req.body;
        const token = await AuthService.login(user);
        
    }

}
module.exports=AuthController;