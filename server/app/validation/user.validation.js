const Joi = require("joi");
const mongoose = require("mongoose");
const UserValidation = {
  getAllUsersPaging(query) {
    const schema = Joi.object({
      pageNumber: Joi.number().min(1).required(),
      pageSize: Joi.number().min(1).required(),
    });
    query.pageNumber = parseInt(query.pageNumber);
    query.pageSize = parseInt(query.pageSize);
    return schema.validate(query);
  },
  validateID(id) {
    try {
      const qId = mongoose.Types.ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
  updateUser(user){
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
  }
};

module.exports = UserValidation;
