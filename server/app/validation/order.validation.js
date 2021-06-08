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
      orderType: Joi.string().required().valid("plant", "bouquet"),
      category: Joi.string()
        .required()
        .valid(...allCategories),
    });
    return schema.validate(item);
  },
 
};
module.exports = OrderValidation;
