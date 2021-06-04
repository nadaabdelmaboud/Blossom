const Joi = require("joi");
const Shop = require("../db/queries/shop.queries")

const OrderValidation = {
  async validateItem(item) {
    const PCat = await Shop.getAllPlantsTypes();
    const BCat = await Shop.getBouquetCategories();
    const allCategories = PCat.concat(BCat);
    const schema = Joi.object({
      bouquetId: Joi.string().required(),
      amount: Joi.number().required(),
      orderType: Joi.string().required(),
      category: Joi.string()
        .required()
        .valid(...allCategories),
    });
    return schema.validate(item);
  },
  async validateStatus(status){
    const schema = Joi.string().required().valid("pending","delivered");
    return schema.validate(status);
  }
};
module.exports = OrderValidation;
