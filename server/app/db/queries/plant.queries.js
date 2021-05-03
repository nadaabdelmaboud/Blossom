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
    if (!plantObject) return false;
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
  async updatePlant(plant, id) {
    const plantData = await PlantModel.findById(id);
    if (!plantData) return [];
    if (plant.name) plantData.name = plant.name;
    if (plant.type) plantData.type = plant.type;
    if (plant.images) plantData.images = plant.images;
    if (plant.info) plantData.info = plant.info;
    if (plant.tips||plant.tips == "") plantData.tips = plant.tips;
    if (plant.price) plantData.price = plant.price;
    if (plant.count && plant.count.available)
      plantData.count.available = plant.count.available;
    if (plant.count && plant.count.sold)
      plantData.count.sold = plant.count.sold;
    const result = await plantData.save();
    return result;
  },
};
module.exports = Plant;
