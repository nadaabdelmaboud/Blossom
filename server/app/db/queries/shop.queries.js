const client = require('../db.caching');
const bcrypt = require('bcrypt');
const ShopModel = require('../models/shop.model');
const Shop = {
    async findAdminById(id){
        const shop = await ShopModel.find({},{admin:1}).lean();
        return shop[0].admin;
    },
    async findAdminByEmail(email){
        const shop = await ShopModel.find({},{admin:1}).lean();
        const admin = shop[0].admin;
        if(email==admin.email){
            return admin;
        }
        return false;
    },
    async comparePassword(admin,password){
        const adminPassword = admin.password;
        const match = await bcrypt.compare(password, adminPassword);
        if (match) {
          return true;
        }
        return false;
    },
    async createShop(shop){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(shop.admin.password, salt);        
        const newShop = new ShopModel({
            address:shop.address,
            phone:shop.phone,
            admin:{
                name:shop.admin.name,
                password:hash,
                email:shop.admin.email
            },
            bouquetCategories:shop.bouquetCategories,
            plantCategories:shop.plantCategories,
            bouquetSentiments:shop.bouquetSentiments
        });
        await newShop.save();
    },
    async getBouquetCategories(){
        const shop = await ShopModel.find({},{bouquetCategories:1}).lean();
        return shop[0].bouquetCategories;
    },
    async getBouquetSentiments(){
        const shop = await ShopModel.find({},{bouquetSentiments:1}).lean();
        return shop[0].bouquetSentiments;
    },
    async createBouquetCategory(category){
        const shop = await ShopModel.find({},{bouquetCategories:1});
        const index = shop[0].bouquetCategories.indexOf(category);
        if(index!=-1) return false;
        shop[0].bouquetCategories.push(category);
        await shop[0].save();
        return true;
    },
    async updateBouquetCategory(category,newCategory){
        const shop = await ShopModel.find({},{bouquetCategories:1});
        const index = shop[0].bouquetCategories.indexOf(category);
        const newIndex = shop[0].bouquetCategories.indexOf(newCategory);
        if(newIndex!=-1) return false;
        shop[0].bouquetCategories.set(index,newCategory);
        await shop[0].save();
        return true;
    },
    async deleteBouquetCategory(category){
        const shop = await ShopModel.find({},{bouquetCategories:1});
        const index = shop[0].bouquetCategories.indexOf(category);
        shop[0].bouquetCategories.splice(index, 1);
        await shop[0].save();
        return true;
    },
    async createBouquetSentiment(sentiment){
        const shop = await ShopModel.find({},{bouquetSentiments:1});
        const index = shop[0].bouquetSentiments.indexOf(sentiment);
        if(index!=-1) return false;
        shop[0].bouquetSentiments.push(sentiment);
        await shop[0].save();
        return true;
    },
    async updateBouquetSentiment(sentiment,newSentiment){
        const shop = await ShopModel.find({},{bouquetSentiments:1});
        const index = shop[0].bouquetSentiments.indexOf(sentiment);
        const newIndex = shop[0].bouquetSentiments.indexOf(newSentiment);
        if(newIndex!=-1) return false;
        shop[0].bouquetSentiments.set(index,newSentiment);
        await shop[0].save().catch((err)=>{console.log(err)});
        return true;
    },
    async deleteBouquetSentiment(sentiment){
        const shop = await ShopModel.find({},{bouquetSentiments:1});
        const index = shop[0].bouquetSentiments.indexOf(sentiment);
        shop[0].bouquetSentiments.splice(index, 1);
        await shop[0].save();
        return true;
    },
    async addType(type) {
        const shop = await ShopModel.find({},{plantCategories:1});
        const index = shop[0].plantCategories.indexOf(type);
        if(index!=-1) return false;
        shop[0].plantCategories.push(type);
        await shop[0].save();
        return shop[0].plantCategories;
      },
      async deleteType(type) {
        const shop = await ShopModel.find({},{plantCategories:1});
        const index = shop[0].plantCategories.indexOf(type);
        shop[0].plantCategories.splice(index, 1);
        await shop[0].save();
        return shop[0].plantCategories;
     
      },
      async getAllPlantsTypes() {
        const shop = await ShopModel.find({},{plantCategories:1});
        return shop[0].plantCategories;

        },
}

module.exports=Shop