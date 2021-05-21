const Joi = require("joi");
const categories = require("../db/models/bouquet.model").categories;
const sentiments = require("../db/models/bouquet.model").sentiments;

const BouquetValidation = {
  async getBouquets(query) {
    const schema = Joi.object({
        category: Joi.string().valid(...categories),
        sentiment: Joi.string().valid(...sentiments),
        pageSize:Joi.number().min(1).required(),
        pageNumber:Joi.number().min(1).required()
      });
      return schema.validate(query);
  },
  async updateCategory(body){
    const schema = Joi.object({
       category:Joi.string().valid(...categories).required(),
       newCategory:Joi.string().min(3).required()
    });
    return schema.validate(body);
  },
  async deleteCategory(category){
    const schema = Joi.object({
       category:Joi.string().valid(...categories).required()
    });
    return schema.validate(category);
  },
  async updateSentiment(body){
    const schema = Joi.object({
       sentiment:Joi.string().valid(...sentiments).required(),
       newSentiment:Joi.string().min(3).required()
    });
    return schema.validate(body);
  },
  async deleteSentiment(sentiment){
    const schema = Joi.object({
      sentiment:Joi.string().valid(...sentiments).required()
    });
    return schema.validate(sentiment);
  },
  async createBouquet(bouquet){
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
