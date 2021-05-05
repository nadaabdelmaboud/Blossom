const Mongoose  = require("mongoose");

const MongooseValidation={

async validateID(id) {
    if (!Mongoose.Types.ObjectId.isValid(id)) return false;
    return true;
  }
}
module.exports = MongooseValidation