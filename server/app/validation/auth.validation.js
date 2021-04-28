const Joi = require('joi');

const AuthValidation = {

    async login(user){
        const schema = Joi.object({
            password: Joi.string()
                .min(3)
                .max(30),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        });
        
    }
}
module.exports=AuthValidation;