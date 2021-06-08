const Joi = require("joi");

const CartValidation = {

    async validateStatus(status){
        const schema = Joi.string().required().valid("progress","delivered");
        return schema.validate(status);
      },
      async validateStatusLimit(query){
        const schema = Joi.object({
          status:Joi.string().required().valid("progress","delivered","pending"),
          limit:Joi.number().min(1)
       });
       return schema.validate(query);
  
      },
      async validPayment(payment){
        const schema = Joi.string().required().valid("cash","paypal");
        return schema.validate(payment);
      },
      async validateLimit(query){
        const schema = Joi.object({
          limit:Joi.number().min(1)
       });
       return schema.validate(query);
  
      },
}
module.exports = CartValidation;