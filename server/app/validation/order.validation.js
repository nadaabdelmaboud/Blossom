const Joi = require("joi");
const { PlantModel, types } = require("../db/models/plants.model");
const categories = require("../db/models/bouquet.model").categories;
const allCategories = types.concat(categories);

const OrderValidation = {
  async validateItem(item) {
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
};
module.exports = OrderValidation;
