const PlantService = require("../services/plant.service");
const PlantController = {
  async getAllPlants(req, res) {
    const query = req.query;
    const data = await PlantService.getAllPlants(query);
    if (data.data) return res.status(200).send(data.data);
    res.status(data.err.status).send(data.err.message);
  },
  async getPlant(req, res) {
    const plant = req.params;
    const data = await PlantService.getPlant(plant);
    if (data.data) return res.status(200).send(data.data);
    res.status(data.err.status).send(data.err.message);
  },
  async createPlant(req, res) {
    const plant = req.body;
    const data = await PlantService.createPlant(plant);
    if (data.data) return res.status(200).send(data.data);
    res.status(data.err.status).send(data.err.message);
  },
  async deletePlant(req, res) {
    const plant = req.params;
    const data = await PlantService.deletePlant(plant);
    if (data.data) return res.status(200).send(data.data);
    res.status(data.err.status).send(data.err.message);
  },
  async updatePlant(req, res) {},
};
module.exports = PlantController;
