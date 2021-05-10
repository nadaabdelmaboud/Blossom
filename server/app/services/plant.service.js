const PlantValidation = require("../validation/plant.validation");
const Plant = require("../db/queries/plant.queries");
const MongooseValidation = require("../validation/mongoose.validation");
const error = require("../validation/error");
const PlantService = {
  async getAllPlants(query) {
    const isValid = await PlantValidation.getAllPlants(query);
    if (isValid.error)
      return { data: false, err: await error(isValid.error.message, 400) };
    const plants = await Plant.getAllPlants(query);
    if (!plants || plants.length == 0)
      return { data: false, err: await error("No Plants Found", 404) };
    return { data: plants, err: "" };
  },
  async getPlant(plant) {
    const isValid = await MongooseValidation.validateID(plant.id);
    if (!isValid)
      return { data: false, err: await error("Invalid Plant ID", 400) };
    const plantObject = await Plant.getPlantById(plant.id);
    if (!plantObject || plantObject.length == 0)
      return { data: false, err: await error("Invalid Plant ID", 404) };
    return { data: plantObject, err: "" };
  },
  async updatePlant(plant, id) {
    const isValid = await MongooseValidation.validateID(id);
    if (!isValid)
      return { data: false, err: await error("Invalid Plant ID", 404) };
    const isPlantFound = await Plant.getPlantById(id);
    if (!isPlantFound)
      return { data: false, err: await error("Invalid Plant ID", 404) };
    if (plant.constructor === Object && Object.keys(plant).length === 0)
      return { data: false, err: await error("Data Is Missing", 400) };
    const isPlantValid = await PlantValidation.validateUpdatePlant(plant);
    if (isPlantValid.error)
      return {
        data: false,
        err: await error(isPlantValid.error.message, 400),
      };
    const plantObject = await Plant.updatePlant(plant, id);
    if (!plantObject || plantObject.length == 0)
      return { data: false, err: await error("Error Updating plant", 500) };
    return { data: plantObject, err: "" };
  },
  async deletePlant(plant) {
    const isValid = await MongooseValidation.validateID(plant.id);
    if (!isValid)
      return { data: false, err: await error("Invalid Plant ID", 400) };
    const plantObject = await Plant.deletePlant(plant.id);
    if (!plantObject || plantObject.length == 0)
      return { data: false, err: await error("Invalid Plant ID", 404) };
    return { data: plantObject, err: "" };
  },
  async createPlant(plant) {
    const isValid = await PlantValidation.validatePlant(plant);
    if (isValid.error)
      return { data: false, err: await error(isValid.error.message, 400) };
    const isUnique = await Plant.getPlant(plant.name);
    if (!isUnique || isUnique.length != 0)
      return {
        data: false,
        err: await error("This Plant Already Exists", 403),
      };
    const plantObject = await Plant.createPlant(plant);
    if (!plantObject)
      return { data: false, err: await error("Error Creating Plant", 500) };
    return { data: plantObject, err: "" };
  },
  async addPlantType(type) {
    const isValid = await PlantValidation.vlalidateType(type);
    if (isValid.error)
      return { data: false, err: await error(isValid.error.message, 400) };
    isFound = await PlantValidation.inTypes(type);
    if (isFound)
      return { data: false, err: await error("This Type Already Exists", 403) };
    const typeObject = await Plant.addType(type);
    return { data: typeObject, err: "" };
  },
  async deletePlantType(type) {
    const isValid = await PlantValidation.vlalidateType(type);
    if (isValid.error)
      return { data: false, err: await error(isValid.error.message, 400) };
    isFound = await PlantValidation.inTypes(type);
    if (!isFound)
      return { data: false, err: await error("This Type Doesn't Exists", 403) };
    const typeObject = await Plant.deleteType(type);
    if (!typeObject)
      return { data: false, err: await error("Types Cannot be empty", 500) };
    return { data: typeObject, err: "" };
  },
};
module.exports = PlantService;