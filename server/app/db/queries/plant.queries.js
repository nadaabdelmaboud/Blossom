const PlantModel = require("../models/plants.model");
const Plant = {
  async getAllPlants(query) {
    const pageSize = query.pageSize ? query.pageSize : 10;
    const pageNumber = query.pageNumber ? query.pageNumber : 1;
    const plants = await PlantModel.find(
      {},
      { name: 1, type: 1, price: 1, count: 1, info: 1, images: 1 }
    )
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
    return plants;
  },
  async deletePlant(id) {
    let plantObject;
    try {
        plantObject = await PlantModel.findByIdAndRemove(id);
    } catch (err) {
      return false;
    }
    if(!plantObject)return false;
    return { _id: plantObject._id };
  },
  async getPlant(name) {
    const plant = await PlantModel.find({ name: name }, { _id: 1 });
    return plant;
  },
  async getPlantById(id) {
    const plant = await PlantModel.findById(id);
    return plant;
  },
  async createPlant(plant) {
    const plantTips = plant.tips ? plant.tips : "";
    const images = plant.images ? plant.images : [];
    const newPlant = new PlantModel({
      name: plant.name.toLowerCase(),
      type: plant.type,
      price: plant.price,
      count: {
        sold: 0,
        available: plant.count.available,
      },
      info: plant.info,
      tips: plantTips,
      images: images,
    });
    let plantObject;
    try {
      plantObject = await newPlant.save();
    } catch (err) {
      return false;
    }
    return { _id: plantObject._id };
  },
};
module.exports = Plant;
