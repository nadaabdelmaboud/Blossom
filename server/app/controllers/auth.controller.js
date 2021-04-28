const AuthService = require('../services/auth.service')
const AuthController = {

    async login(req,res){
        const user = req.body;
        const token,err = await AuthService.login(user);
        if(token){
            return res.status(200).send(token);
        }
        res.status(err.status).send(err.message);
    },
    async signUp(req,res){
        const user = req.body;
        const token,err = await AuthService.signUp(user);
        if(token){
            return res.status(200).send(token);
        }
        res.status(err.status).send(err.message);
    }

}
module.exports=AuthController;