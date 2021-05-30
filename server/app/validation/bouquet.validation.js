const Joi = require("joi");
const Shop = require('../db/queries/shop.queries')
const BouquetValidation = {
  async getBouquets(query) {
    const categories = await Shop.getBouquetCategories();
    const sentiments = await Shop.getBouquetSentiments();
    const schema = Joi.object({
        category: Joi.string().valid(...categories),
        sentiment: Joi.string().valid(...sentiments),
        pageSize:Joi.number().min(1).required(),
        pageNumber:Joi.number().min(1).required()
      });
      return schema.validate(query);
  },
 
  async createBouquet(bouquet){
    const categories = await Shop.getBouquetCategories();
    const sentiments = await Shop.getBouquetSentiments();
    const schema = Joi.object({
      bouquetCategory: Joi.string().valid(...categories).required(),
      bouquetSentiment: Joi.string().valid(...sentiments).required(),
      price:Joi.number().min(1).required(),
      count:Joi.number().min(1).required(),
      name:Joi.string().min(2).required(),
      info:Joi.string().required(),
      image:Joi.string().required()
    });
  
    return schema.validate(bouquet)
 
  },
  async updateBouquet(bouquet){
    const categories = await Shop.getBouquetCategories();
    const sentiments = await Shop.getBouquetSentiments();
    const schema = Joi.object({
      bouquetCategory: Joi.string().valid(...categories),
      bouquetSentiment: Joi.string().valid(...sentiments),
      price:Joi.number().min(1),
      count:Joi.number().min(1),
      name:Joi.string().min(2),
      info:Joi.string(),
      image:Joi.string()
    });
    return schema.validate(bouquet)
  }
};
module.exports = BouquetValidation;
