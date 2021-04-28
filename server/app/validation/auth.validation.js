const Joi = require('joi');

const AuthValidation = {

    login(user){
        const schema = Joi.object({
            password: Joi.string()
                .min(3)
                .max(30),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        });
        const {error,value} =  schema.validate(user);
        if(error){
            return false;
        }
        return true;
    },
    signUp(user){
        const schema = Joi.object({
            name: Joi.string()
            .min(3)
            .max(30),
            password: Joi.string()
                .min(3)
                .max(30),
            repeat_password: Joi.ref('password'),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            address : {
                country : Joi.string()
                .min(1)
                .max(30),
                city: Joi.string()
                .min(1)
                .max(30),
                street : Joi.string()
                .min(1)
                .max(30), 
                buildingNo: Joi.number(),
                apartmentNo: Joi.number() 
            },
            phone:{
                    type : String,
                    required : true
            }, 
        });
        const {error,value} =  schema.validate(user);
        if(error){
            return false;
        }
        return true;
    }
}
module.exports=AuthValidation;