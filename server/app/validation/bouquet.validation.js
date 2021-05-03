const Joi = require("joi");
const BouquetValidation = {
  async getBouquets(query) {
    const schema = Joi.object({
        category: Joi.string().valid('','BabyOrchid','Cabbage','Chrysanthemums','Eucalyptus','Gerbera','Roses','Lilies','Spider','Tulips').required(),
        sentiment: Joi.string().valid('','I Love You','I Miss You','Congratulations','Get Well Soon','Happy Anniversary','Happy Birthday','I Am Sorry','Thank You','Wedding').required(),
        pageSize:Joi.number().min(1).required(),
        pageNumber:Joi.number().min(1).required()
      });
      return schema.validate(query);
  },
  async createBouquet(bouquet){
    const schema = Joi.object({
      category: Joi.string().valid('BabyOrchid','Cabbage','Chrysanthemums','Eucalyptus','Gerbera','Roses','Lilies','Spider','Tulips').required(),
      sentiment: Joi.string().valid('I Love You','I Miss You','Congratulations','Get Well Soon','Happy Anniversary','Happy Birthday','I Am Sorry','Thank You','Wedding').required(),
      price:Joi.number().min(1).required(),
      count:Joi.number().min(1).required(),
      name:Joi.string().min(2).required(),
      info:Joi.string().required(),
      image:Joi.string().required()
    });
  
    return schema.validate(bouquet)
 
  }
};
module.exports = BouquetValidation;
