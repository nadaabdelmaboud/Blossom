const AuthValidation = require('../validation/auth.validation')
const AuthService={

    async login(user){
        AuthValidation.login(user);
    }
}
module.exports=AuthService;