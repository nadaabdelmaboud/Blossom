const BouquetModel = require('../models/bouquet.model').BouquetModel;
const categories = require('../models/bouquet.model').categories;
const sentiments = require('../models/bouquet.model').sentiments;
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
    async getCategories(){
        return categories;

    },
    async createCategory(category){
        const index = categories.indexOf(category);
        if(index!=-1) return false;
        categories.push(category)
        return true;
    },
    async updateCategory(category,newCategory){
        const index = categories.indexOf(category);
        const newIndex = categories.indexOf(newCategory);
        if(newIndex!=-1) return false;
        categories[index]=newCategory;
        return true;
    },
    async deleteCategory(category){
        const index = categories.indexOf(category);
        categories.splice(index, 1);
        return true;
    },
    async getSentiments(){
        return sentiments;

    },
    async createSentiment(sentiment){
        const index = sentiments.indexOf(sentiment);
        if(index!=-1) return false;
        sentiments.push(sentiment)
        return true;
    },
    async updateSentiment(sentiment,newSentiment){
        const index = sentiments.indexOf(sentiment);
        const newIndex = sentiments.indexOf(newSentiment);
        if(newIndex!=-1) return false;
        sentiments[index]=newSentiment;
        console.log(sentiments)
        return true;
    },
    async deleteSentiment(sentiment){
        const index = sentiments.indexOf(sentiment);
        sentiments.splice(index, 1);
        return true;
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
    },
    async fillData(orderObject){
        const Bouquets = await BouquetModel.find(
          { _id: { $in: orderObject.bouquetId } },
          { name: 1, images: 1, price: 1, count: 1 }
        );
        if (!Bouquets || !Bouquets.length) return false;
        for (var i = 0; i < Bouquets.length; i++) {
          orderObject.UserData[Bouquets[i]._id].name = Bouquets[i].name;
          orderObject.UserData[Bouquets[i]._id].images = Bouquets[i].images;
          orderObject.UserData[Bouquets[i]._id].price = Bouquets[i].price;
          orderObject.UserData[Bouquets[i]._id].count = Bouquets[i].count;
        }
        return true;
    }
   
   
}
module.exports = Bouquet;