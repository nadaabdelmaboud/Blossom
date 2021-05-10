const { array } = require("joi");
const {PlantModel,types} = require("../models/plants.model");
const Plant = {
  async getAllPlants(query) {
    const pageSize = query.pageSize ? query.pageSize : 10;
    const pageNumber = query.pageNumber ? query.pageNumber : 1;
    var fields = { name: 1, type: 1, price: 1, count: 1, info: 1, image: 1 };
    var filters = {};
    if (query.type && query.type != "") filters.type = query.type;
    if (query.hasTips) {
      filters.tips = { $exists: true, $ne: [] };
      fields.tips = 1;
    }
    const plants = await PlantModel.find(filters, fields)
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
    const plantTips = plant.tips ? plant.tips : [];
    const image = plant.image ? plant.image : "";
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
      image: image,
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
    if (plant.image) plantData.image = plant.image;
    if (plant.info) plantData.info = plant.info;
    if (plant.tips || plant.tips == []) plantData.tips = plant.tips;
    if (plant.price) plantData.price = plant.price;
    if (plant.count && plant.count.available)
      plantData.count.available = plant.count.available;
    if (plant.count && plant.count.sold)
      plantData.count.sold = plant.count.sold;
    const result = await plantData.save();
    return result;
  },async addType(type){
    types.push(type);
    return types;
  },async deleteType(type){
    if(array.length==1){
      return false;
    }
    const index = types.indexOf(type);
    types.splice(index, 1);
    return types;
  }

};
module.exports = Plant;
