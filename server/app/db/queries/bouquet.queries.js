const BouquetModel = require('../models/bouquet.model');
const client = require('../db.caching');
const  Mongoose  = require('mongoose');
const Bouquet = {
    async getBouquets(pageNumber,pageSize,category='',sentiment=''){
        let query = (category==''&&sentiment=='')?"{}":(category!=''&&sentiment=='')?`{"bouquetCategory":"${category}"}`:(category==''&&sentiment!='')?`{"bouquetSentiment":"${sentiment}"}`:`"{bouquetCategory":"${category}","bouquetSentiment":"${sentiment}"}`;
        query = JSON.parse(query);
        pageNumber = parseInt(pageNumber);
        pageSize = parseInt(pageSize);
        const bouquets = await BouquetModel.find(query).skip((pageNumber-1)*pageSize).limit(pageSize);
        return bouquets;
    },
    async getBouquetById(id){
        const bouquet = await BouquetModel.findById(id).lean();
        return bouquet;
    },
    async createBouquet(bouquet){
        const newBouquet = new BouquetModel({
            name :bouquet.name,
            price :bouquet.price,
            count : {
                sold:0,
                available:bouquet.count
            }, 
            info:bouquet.info,
            bouquetCategory:bouquet.bouquetCategory,
            bouquetSentiment:bouquet.bouquetSentiment,
            images:bouquet.image
          });
          bouquet = await newBouquet.save();
          if(bouquet)return true;
          return false;
    },
    async updateBouquet(bouquet,id){
        id = Mongoose.Types.ObjectId(id)
        let bouquetObject = await BouquetModel.findById(id);
        if(!bouquetObject) return false;
        if(bouquet.count){
            bouquet.count= {
                sold:bouquetObject.count.sold,
                available:bouquet.count
            }
        }
        return await BouquetModel.findByIdAndUpdate(id, {
            $set: bouquet
          }).lean()
    }
   
}
module.exports = Bouquet;