const { array } = require("joi");
const { PlantModel } = require("../models/plants.model");
const Plant = {
  async getAllPlants(query) {
    const pageSize = query.pageSize ? query.pageSize : 10;
    const pageNumber = query.pageNumber ? query.pageNumber : 1;
    var fields = { name: 1, type: 1, price: 1, count: 1, info: 1, images: 1 };
    var filters = {};
    if (query.type && query.type != "") filters.type = query.type;
    if (query.hasTips) {
      filters.tips = { $exists: true, $ne: [] };
      fields.tips = 1;
    }
    const Plants = await PlantModel.find(filters, fields)
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
    if (Plants) {
      const Count = await PlantModel.countDocuments(filters);
      return {Plants:Plants , MaxPage:Math.ceil(Count / pageSize)}
    }
    return Plants;
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
  async getPlantById(id, idOnly = 0) {
    const projection = idOnly == 1 ? { _id: 1 } : {};
    const plant = await PlantModel.findById(id, projection);
    return plant;
  },
  async createPlant(plant) {
    const plantTips = plant.tips ? plant.tips : [];
    const images = plant.images ? plant.images : "";
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
    if (plant.tips || plant.tips == []) plantData.tips = plant.tips;
    if (plant.price) plantData.price = plant.price;
    if (plant.count && plant.count.available)
      plantData.count.available = plant.count.available;
    if (plant.count && plant.count.sold)
      plantData.count.sold = plant.count.sold;
    const result = await plantData.save();
    return result;
  },

  async updatePlantCount(operation, id, amount) {
    const PlantData = await PlantModel.findById(id, { count: 1 });
    if (!PlantData) return false;
    if (operation == 1)
      if (amount <= PlantData.count.available) {
        PlantData.count.available -= amount;
        PlantData.count.sold += amount;
      } else return { status: 0, count: PlantData.count.available };
    else if (operation == 0) {
      PlantData.count.available += amount;
      PlantData.count.sold -= amount;
    }
    const Result = await PlantData.save();
    if (Result) return { status: 1 };
    return false;
  },
  async fillData(orderObject) {
    const Plants = await PlantModel.find(
      { _id: { $in: orderObject.plantId } },
      { name: 1, images: 1, price: 1, count: 1 }
    );
    if (!Plants || !Plants.length) return false;
    for (var i = 0; i < Plants.length; i++) {
      orderObject.UserData[Plants[i]._id].name = Plants[i].name;
      orderObject.UserData[Plants[i]._id].images = Plants[i].images;
      orderObject.UserData[Plants[i]._id].price = Plants[i].price;
      orderObject.UserData[Plants[i]._id].count = Plants[i].count;
    }
    return true;
  },
};
module.exports = Plant;
