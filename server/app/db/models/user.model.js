const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Address = {
  country: String,
  city: String,
  street: String,
  buildingNo: Number,
  apartmentNo: Number,
};
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: Address,
    require: true,
  },
  phone: {
    type: String,
    required: true,
  },
  creditCard: {
    cardNumber: Number,
    ccNumber: Number,
    expireDate: Date,
  },
  Cart: [
    {
      orders: {
        type:Object
      },
      status: {
        type: String,
        enum: ["empty","ordering","pending", "progress", "delivered"],
        required: true,
      },
      address: {
        type: Address,
        required: true,
      },
      deliveryDate: {
        type: Date,
      },
      lastEdit: {
        type: Date,
      },
      feedback: {
        comment: String,
        rate: Number,
        feedbackDate: Date,
      },
    },
  ],
},{minimize:false});

UserSchema.methods.comparePassword = async function (password) {
  const match = await bcrypt.compare(password, this.password);
  if (match) {
    return true;
  }
  return false;
};

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
