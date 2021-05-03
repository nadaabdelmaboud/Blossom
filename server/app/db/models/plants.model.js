const mongoose = require('mongoose')
const PlantSchema = new mongoose.Schema({
  name: {
    type: String,
    uinque: true,
    required: true,
  },
  type: {
    type: String,
    enum: ["vegetable", "fruit" , "herb" , "flower" ,"house plant"],
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
  tips: {
    type: String,
  },
  images: [String],
});

const PlantModel = mongoose.model('Plant',PlantSchema);
module.exports=PlantModel;