const Joi = require('joi');

const AuthValidation = {

    login(user){
        const schema = Joi.object({
            password: Joi.string()
                .min(3)
                .max(30).required(),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
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
            .max(30)
            .required(),
            password: Joi.string()
                .min(3)
                .max(30)
                .required(),
            repeat_password: Joi.ref('password'),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            address : {
                country : Joi.string()
                .min(1)
                .max(30)
                .required(),
                city: Joi.string()
                .min(1)
                .max(30)
                .required(),
                street : Joi.string()
                .min(1)
                .max(30)
                .required(), 
                buildingNo: Joi.number().required(),
                apartmentNo: Joi.number().required()
            },
            phone:Joi.string()
            .length(11)
            .required(),
        });
        const {error,value} =  schema.validate(user);
        if(error){
            return false;
        }
        return true;
    }
}
module.exports=AuthValidation;