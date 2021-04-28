const AuthService = require('../services/auth.service')
const AuthController = {

    async login(req,res){
        const user = req.body;
        const data = await AuthService.login(user);
        if(data.token){
            return res.status(200).send(data.token);
        }
        res.status(data.err.status).send(data.err.message);
    },
    async signUp(req,res){
        const user = req.body;
        const data = await AuthService.signUp(user);
        if(data.token){
            return res.status(200).send(data.token);
        }
        res.status(data.err.status).send(data.err.message);
    }

}
module.exports=AuthController;