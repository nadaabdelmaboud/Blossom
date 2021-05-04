const BouquetService = require('../services/bouquet.service');

const UserController = {

  async getBouquets(req, res) {
    const query = req.query;
    const data = await BouquetService.getBouquets(query);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async getBouquetById(req,res){
    const bouquetId = req.params.id;
    const data = await BouquetService.getBouquetById(bouquetId)
    if (data.data) {
        return res.status(200).send(data.data);
      }
      res.status(data.err.status).send(data.err.message);
  },
  async createBouquet(req,res){
    const data = await BouquetService.createBouquet(req.body)
    if (data.data) {
        return res.status(200).send(data.data);
      }
      res.status(data.err.status).send(data.err.message);
  },
  async updateBouquet(req,res){
      const data = await BouquetService.updateBouquet(req.body,req.params.id);
      if (data.data) {
        return res.status(200).send(data.data);
      }
      res.status(data.err.status).send(data.err.message);

  },
  async deleteBouquet(req,res){

  }


};
module.exports = UserController;