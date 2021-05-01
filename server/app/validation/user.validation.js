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
};

module.exports = UserValidation;
