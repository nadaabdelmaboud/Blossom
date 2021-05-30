const Joi = require("joi");
const Shop = require("../db/queries/shop.queries")

const ShopValidation = {
    async createBouquetSentiment(body){
        const schema = Joi.object({
           sentiment:Joi.string().min(3).required()
        });
        return schema.validate(body);
      },
      async createBouquetCategory(body){
        const schema = Joi.object({
           category:Joi.string().min(3).required()
        });
        return schema.validate(body);
      },
      async updateBouquetCategory(body){
        const categories = await Shop.getBouquetCategories();
        const schema = Joi.object({
           category:Joi.string().valid(...categories).required(),
           newCategory:Joi.string().min(3).required()
        });
        return schema.validate(body);
      },
      async deleteBouquetCategory(category){
        const categories = await Shop.getBouquetCategories();
        const schema = Joi.object({
           category:Joi.string().valid(...categories).required()
        });
        return schema.validate(category);
      },
      async updateBouquetSentiment(body){
        const sentiments = await Shop.getBouquetSentiments();
        const schema = Joi.object({
           sentiment:Joi.string().valid(...sentiments).required(),
           newSentiment:Joi.string().min(3).required()
        });
        return schema.validate(body);
      },
      async deleteBouquetSentiment(sentiment){
        const sentiments = await Shop.getBouquetSentiments();
        const schema = Joi.object({
          sentiment:Joi.string().valid(...sentiments).required()
        });
        return schema.validate(sentiment);
      },
      async vlalidatePlantType(type) {
        const schema = Joi.string().min(3).max(30);
        return schema.validate(type);
      },
      async inPlantTypes(type){
        const types = await Shop.getAllPlantsTypes();
        return types.includes(type);
      }
}
module.exports = ShopValidation