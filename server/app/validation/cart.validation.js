const Joi = require("joi");

const CartValidation = {

    async validateStatus(status){
        const schema = Joi.string().required().valid("progress","delivered");
        return schema.validate(status);
      },
      async validateGetStatus(status){
        const schema = Joi.string().required().valid("progress","delivered","pending");
        return schema.validate(status);
      }
}
module.exports = CartValidation;