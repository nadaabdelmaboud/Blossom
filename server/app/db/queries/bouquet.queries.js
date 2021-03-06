const BouquetModel = require('../models/bouquet.model').BouquetModel;
const categories = require('../models/bouquet.model').categories;
const sentiments = require('../models/bouquet.model').sentiments;
const  Mongoose  = require('mongoose');
const Bouquet = {
    async getBouquets(pageNumber,pageSize,category='',sentiment=''){
        let query = (category==''&&sentiment=='')?"{}":(category!=''&&sentiment=='')?`{"bouquetCategory":"${category}"}`:(category==''&&sentiment!='')?`{"bouquetSentiment":"${sentiment}"}`:`"{bouquetCategory":"${category}","bouquetSentiment":"${sentiment}"}`;
        query = JSON.parse(query);
        pageNumber = parseInt(pageNumber);
        pageSize = parseInt(pageSize);
        const bouquets = await BouquetModel.find(query).skip((pageNumber-1)*pageSize).limit(pageSize);
        if(bouquets){
            const Count = await BouquetModel.countDocuments(query);
            return { bouquets:bouquets,MaxPage: Math.ceil(Count / pageSize) };
        }
        return bouquets;
    },
    async getBouquetById(id,projection = {}){
        const bouquet = await BouquetModel.findById(id, projection).lean();
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
    },
    async deleteBouquet(id){
        id = Mongoose.Types.ObjectId(id)
        try{
            await BouquetModel.deleteOne({_id:id});
            return true;
        }
        catch(err){
            return false;
        }

    },
    async updateBouquetCount(operation, id, amount){
        const BouquetData = await BouquetModel.findById(id,{count:1});
        if (!BouquetData) return false;
        if (operation == 1)
          if (amount <= BouquetData.count.available){
            BouquetData.count.available -= amount;
            BouquetData.count.sold += amount;
            }
          else return { status: 0, count: BouquetData.count.available };
        else if (operation == 0) {
            BouquetData.count.available += amount;
            BouquetData.count.sold -= amount;
        }
        const Result = await BouquetData.save();
        if (Result) return { status: 1};
        return false;
    }
}
module.exports = Bouquet;