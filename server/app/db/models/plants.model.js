const mongoose = require('mongoose');
let types = ["vegetable", "fruit", "herb", "flower", "house plant"];
const PlantSchema = new mongoose.Schema({
  name: {
    type: String,
    uinque: true,
    required: true,
  },
  type: {
    type: String,
    enum: types,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  count: {
    sold: Number,
    available: Number,
  },
  info: {
    type: String,
    required: true,
  },
  tips: [String],
  image: String,
});

const PlantModel = mongoose.model('Plant',PlantSchema);
module.exports.PlantModel=PlantModel;
module.exports.types = types;