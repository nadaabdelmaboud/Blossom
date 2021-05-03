const BouquetModel = require('../models/bouquet.model');
const client = require('../db.caching');
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
        const bouquet = await BouquetModel.findById(id);
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
            bouquetCategory:bouquet.category,
            bouquetSentiment:bouquet.sentiment,
            images:[bouquet.image]
          });
          bouquet = await newBouquet.save();
          if(bouquet)return true;
          return false;
    }
   
}
module.exports = Bouquet;