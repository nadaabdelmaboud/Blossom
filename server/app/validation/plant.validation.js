const Joi = require("joi");
const mongoose = require("mongoose");
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
  async validateID(id) {
    try {
      const qId = mongoose.Types.ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
  async validatePlant(plant) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      type: Joi.string().valid(
        "vegetable",
        "fruit",
        "herb",
        "flower",
        "house plant"
      ),
      price: Joi.number().min(1).required(),
      count: {
        available: Joi.number().min(1).required(),
      },
      info: Joi.string().required(),
      tips: Joi.string().allow(""),
      images: Joi.array().items(Joi.string()),
    });
    plant.type = plant.type.toLowerCase();
    return schema.validate(plant);
  },
};

module.exports = PlantValidation;