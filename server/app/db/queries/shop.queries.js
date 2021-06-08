const bcrypt = require("bcrypt");
const ShopModel = require("../models/shop.model");
const PlantModel = require('../models/plants.model').PlantModel;
const BouquetModel = require('../models/bouquet.model').BouquetModel;

const Shop = {
  async findAdminById(id) {
    const shop = await ShopModel.find({}, { admin: 1 }).lean();
    return shop[0].admin;
  },
  async findAdminByEmail(email) {
    const shop = await ShopModel.find({}, { admin: 1 }).lean();
    const admin = shop[0].admin;
    if (email == admin.email) {
      return admin;
    }
    return false;
  },
  async comparePassword(admin, password) {
    const adminPassword = admin.password;
    const match = await bcrypt.compare(password, adminPassword);
    if (match) {
      return true;
    }
    return false;
  },
  async createShop(shop) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(shop.admin.password, salt);
    const newShop = new ShopModel({
      address: shop.address,
      phone: shop.phone,
      admin: {
        name: shop.admin.name,
        password: hash,
        email: shop.admin.email,
      },
      bouquetCategories: shop.bouquetCategories,
      plantCategories: shop.plantCategories,
      bouquetSentiments: shop.bouquetSentiments,
    });
    await newShop.save();
  },
  async getBouquetCategories() {
    const shop = await ShopModel.find({}, { bouquetCategories: 1 }).lean();
    return shop[0].bouquetCategories;
  },
  async getBouquetCategoriesImages(){
      const shop = await ShopModel.find({}, { bouquetCategories: 1 }).lean();
      const categories = shop[0].bouquetCategories;
      const bouquetCategories=[];
      for(let i=0;i<categories.length;i++){
        let image = await BouquetModel.find({bouquetCategory:categories[i]},{images:1}).limit(1);
        if(image.length>0){
          image = image[0].images;
        }
        else{
          image='';
        }
        const category = {
          name: categories[i],
          image:image
        }
        bouquetCategories.push(category);
      }
      return bouquetCategories
  },
  async getBouquetSentimentsImages(){
    const shop = await ShopModel.find({}, { bouquetSentiments: 1 }).lean();
    const sentiments = shop[0].bouquetSentiments;
    const bouquetSentiments=[];
    for(let i=0;i<sentiments.length;i++){
      let image = await BouquetModel.find({bouquetSentiment:sentiments[i]},{images:1}).limit(2);
      if(image.length>1){
        image = image[1].images;
      }
      else if(image.length>0){
        image = image[0].images;
      }
      else{
        image='';
      }
      const sentiment = {
        name: sentiments[i],
        image:image
      }
      bouquetSentiments.push(sentiment);
    }
    return bouquetSentiments
},
async getPlantCategoriesImages(){
  const shop = await ShopModel.find({}, { plantCategories: 1 }).lean();
  const categories = shop[0].plantCategories;
  const plantCategories=[];
  for(let i=0;i<categories.length;i++){
    let image = await PlantModel.find({type:categories[i]},{images:1}).limit(1);
    if(image.length>0){
      image = image[0].images;
    }
    else{
      image='';
    }
    const category = {
      name: categories[i],
      image:image
    }
    plantCategories.push(category);
  }
  return plantCategories
},
  async getBouquetSentiments() {
    const shop = await ShopModel.find({}, { bouquetSentiments: 1 }).lean();
    return shop[0].bouquetSentiments;
  },
  async createBouquetCategory(category) {
    const shop = await ShopModel.find({}, { bouquetCategories: 1 });
    const index = shop[0].bouquetCategories.indexOf(category);
    if (index != -1) return false;
    shop[0].bouquetCategories.push(category);
    await shop[0].save();
    return await this.getBouquetCategoriesImages();
  },
  async updateBouquetCategory(category, newCategory) {
    const shop = await ShopModel.find({}, { bouquetCategories: 1 });
    const index = shop[0].bouquetCategories.indexOf(category);
    const newIndex = shop[0].bouquetCategories.indexOf(newCategory);
    if (newIndex != -1) return false;
    shop[0].bouquetCategories.set(index, newCategory);
    await shop[0].save();
    return shop[0].bouquetCategories;
  },
  async deleteBouquetCategory(category) {
    const shop = await ShopModel.find({}, { bouquetCategories: 1 });
    const index = shop[0].bouquetCategories.indexOf(category);
    shop[0].bouquetCategories.splice(index, 1);
    await shop[0].save();
    return shop[0].bouquetCategories;
  },
  async createBouquetSentiment(sentiment) {
    const shop = await ShopModel.find({}, { bouquetSentiments: 1 });
    const index = shop[0].bouquetSentiments.indexOf(sentiment);
    if (index != -1) return false;
    shop[0].bouquetSentiments.push(sentiment);
    await shop[0].save();
    return await this.getBouquetSentimentsImages();
  },
  async updateBouquetSentiment(sentiment, newSentiment) {
    const shop = await ShopModel.find({}, { bouquetSentiments: 1 });
    const index = shop[0].bouquetSentiments.indexOf(sentiment);
    const newIndex = shop[0].bouquetSentiments.indexOf(newSentiment);
    if (newIndex != -1) return false;
    shop[0].bouquetSentiments.set(index, newSentiment);
    await shop[0].save().catch((err) => {
      console.log(err);
    });
    return shop[0].bouquetSentiments;
  },
  async deleteBouquetSentiment(sentiment) {
    const shop = await ShopModel.find({}, { bouquetSentiments: 1 });
    const index = shop[0].bouquetSentiments.indexOf(sentiment);
    shop[0].bouquetSentiments.splice(index, 1);
    await shop[0].save();
    return shop[0].bouquetSentiments;
  },
  async addType(type) {
    const shop = await ShopModel.find({}, { plantCategories: 1 });
    const index = shop[0].plantCategories.indexOf(type);
    if (index != -1) return false;
    shop[0].plantCategories.push(type);
    await shop[0].save();
    return await this.getPlantCategoriesImages();
  },
  async deleteType(type) {
    const shop = await ShopModel.find({}, { plantCategories: 1 });
    const index = shop[0].plantCategories.indexOf(type);
    shop[0].plantCategories.splice(index, 1);
    await shop[0].save();
    return shop[0].plantCategories;
  },
  async getAllPlantsTypes() {
    const shop = await ShopModel.find({}, { plantCategories: 1 });
    return shop[0].plantCategories;
  },
  async getTopRatings() {
    const ratings = await ShopModel.find({}, { topRatings: 1 });
    if(!ratings || ratings.length==0){
        return [0,0,0,0,0,0];
    }
    return ratings;
  },
};

module.exports = Shop;
