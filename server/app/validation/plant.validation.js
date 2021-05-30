const Joi = require("joi");
const Shop = require('../db/queries/shop.queries')

const PlantValidation = {
  async getAllPlants(query) {
    const types = await Shop.getAllPlantsTypes();

    const schema = Joi.object({
      pageNumber: Joi.number().min(1),
      pageSize: Joi.number().min(1),
      type: Joi.string().valid(...types),
      hasTips: Joi.boolean(),
    });
    if (query.pageNumber) query.pageNumber = parseInt(query.pageNumber);
    if (query.pageSize) query.pageSize = parseInt(query.pageSize);
    if (query.hasTips) query.hasTips = query.hasTips == "true";
    return schema.validate(query);
  },
  async validatePlant(plant) {
    const types = await Shop.getAllPlantsTypes();
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      type: Joi.string()
        .valid(...types)
        .required(),
      price: Joi.number().min(1).required(),
      count: {
        available: Joi.number().min(1).required(),
      },
      info: Joi.string().required(),
      tips: Joi.array().items(Joi.string()),
      images: Joi.string().required(),
    });
    plant.type = plant.type.toLowerCase();
    return schema.validate(plant);
  },
  async validateUpdatePlant(plant) {
    const types = await Shop.getAllPlantsTypes();
    const schema = Joi.object({
      name: Joi.string().min(3).max(30),
      type: Joi.string().valid(...types),
      price: Joi.number().min(1),
      count: {
        available: Joi.number().min(1),
      },
      info: Joi.string(),
      tips: Joi.array().items(Joi.string()),
      images: Joi.string(),
    });
    if (plant.type) plant.type = plant.type.toLowerCase();
    if (plant.name) plant.name = plant.name.toLowerCase();
    return schema.validate(plant);
  },

 
};

module.exports = PlantValidation;
