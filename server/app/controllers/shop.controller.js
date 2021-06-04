const ShopService = require('../services/shop.service');

const ShopController = {
    async getCategories(req,res){
        const data = await ShopService.getBouquetCategories();
        if(data.data){
          return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
      },
      async createCategory(req,res){
        const data = await ShopService.createBouquetCategory(req.body);
        if(data.data){
          return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
      },
      async updateCategory(req,res){
        const data = await ShopService.updateBouquetCategory(req.body);
        if(data.data){
          return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
      },
      async deleteCategory(req,res){
        const data = await ShopService.deleteBouquetCategory(req.body);
        if(data.data){
          return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
      },
      async getSentiments(req,res){
        const data = await ShopService.getBouquetSentiments();
        if(data.data){
          return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
      },
      async createSentiment(req,res){
        const data = await ShopService.createBouquetSentiment(req.body);
        if(data.data){
          return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
      },
      async updateSentiment(req,res){
        const data = await ShopService.updateBouquetSentiment(req.body);
        if(data.data){
          return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
      },
      async deleteSentiment(req,res){
        const data = await ShopService.deleteBouquetSentiment(req.body);
        if(data.data){
          return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
      },
      async addPlantType(req, res) {
        const type = req.body.type;
        const data = await ShopService.addPlantType(type);
        if (data.data) return res.status(200).send(data.data);
        res.status(data.err.status).send(data.err.message);
      },
      async deletePlantType(req, res) {
        const type = req.body.type;
        const data = await ShopService.deletePlantType(type);
        if (data.data) return res.status(200).send(data.data);
        res.status(data.err.status).send(data.err.message);
      },
      async getAllPlantsTypes(req,res){
         const data = await ShopService.getAllPlantsTypes();
         if (data.data) return res.status(200).send(data.data);
         res.status(data.err.status).send(data.err.message);
      }
}
module.exports = ShopController;