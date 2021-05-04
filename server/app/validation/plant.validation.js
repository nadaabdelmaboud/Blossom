const Joi = require("joi");
const PlantValidation = {
  async getAllPlants(query) {
    const schema = Joi.object({
      pageNumber: Joi.number().min(1),
      pageSize: Joi.number().min(1),
    });
    if (query.pageNumber) query.pageNumber = parseInt(query.pageNumber);
    if (query.pageSize) query.pageSize = parseInt(query.pageSize);
    return schema.validate(query);
  },
  async validatePlant(plant) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      type: Joi.string()
        .valid("vegetable", "fruit", "herb", "flower", "house plant")
        .required(),
      price: Joi.number().min(1).required(),
      count: {
        available: Joi.number().min(1).required(),
      },
      info: Joi.string().required(),
      tips: Joi.array().items(Joi.string()),
      images: Joi.array().items(Joi.string()).required(),
    });
    plant.type = plant.type.toLowerCase();
    return schema.validate(plant);
  },
  async validateUpdatePlant(plant){
    const schema = Joi.object({
      name: Joi.string().min(3).max(30),
      type: Joi.string().valid(
        "vegetable",
        "fruit",
        "herb",
        "flower",
        "house plant"
      ),
      price: Joi.number().min(1),
      count: {
        available: Joi.number().min(1),
      },
      info: Joi.string(),
      tips: Joi.array().items(Joi.string()),
      images: Joi.array().items(Joi.string()),
    });
    if(plant.type) plant.type = plant.type.toLowerCase();
    if(plant.name) plant.name = plant.name.toLowerCase();
    return schema.validate(plant);
  }
};

module.exports = PlantValidation;