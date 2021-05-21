const Joi = require("joi");
const { PlantModel, types } = require("../db/models/plants.model");
const categories = require("../db/models/bouquet.model").categories;
const allCategories = types.concat(categories);

const UserValidation = {
  async getAllUsersPaging(query) {
    const schema = Joi.object({
      pageNumber: Joi.number().min(1),
      pageSize: Joi.number().min(1),
    });
    query.pageNumber = parseInt(query.pageNumber);
    query.pageSize = parseInt(query.pageSize);
    return schema.validate(query);
  },
  async updateUser(user){
    const schema = Joi.object({
      name: Joi.string().min(3).max(30),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().min(3).max(30),
      address: {
        country: Joi.string().min(1).max(30),
        city: Joi.string().min(1).max(30),
        street: Joi.string().min(1).max(30),
        buildingNo: Joi.number(),
        apartmentNo: Joi.number(),
      },
      phone: Joi.string().length(11)
    });
    return schema.validate(user);
  },
  async validateItem(item){
    const schema = Joi.object({
      bouquetId: Joi.string().required(),
      amount: Joi.number().required(),
      orderType: Joi.string().required(),
      category: Joi.string().required().valid(...allCategories)
    });
    return schema.validate(item);
  }
};

module.exports = UserValidation;
