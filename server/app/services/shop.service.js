const ShopValidation = require('../validation/shop.validation')
const MongooseValidation = require('../validation/mongoose.validation')
const User = require("../db/queries/user.queries")
const error = require('../validation/error');
const Shop = require('../db/queries/shop.queries')

const ShopService={
    async getBouquetCategories(){
        return {data:await Shop.getBouquetCategories(),err:''}
    },
    async createBouquetCategory(body){
        const isValid = await ShopValidation.createBouquetCategory(body)
        if(isValid.error) return {data:false,err:await error(isValid.error.message,400)}
        const success = await Shop.createBouquetCategory(body.category)
        if(!success) return {data:false,err:await error("Error in creating category",403)}
        return {data:true,err:''}
    },
    async updateBouquetCategory(body){
        const isValid = await ShopValidation.updateBouquetCategory(body)
        if(isValid.error) return {data:false,err:await error(isValid.error.message,400)}
        const success = await Shop.updateBouquetCategory(body.category,body.newCategory)
        if(!success) return {data:false,err:await error("Error in updating category",403)}
        return {data:true,err:''}
    },
    async deleteBouquetCategory(body){
        const isValid = await ShopValidation.deleteBouquetCategory(body)
        if(isValid.error) return {data:false,err:await error(isValid.error.message,400)}
        const success = await Shop.deleteBouquetCategory(body.category)
        if(!success) return {data:false,err:await error("Error in deleting category",403)}
        return {data:true,err:''}
    },
    async getBouquetSentiments(){
        return {data:await Shop.getBouquetSentiments(),err:''}
    },
    async createBouquetSentiment(body){
        const isValid = await ShopValidation.createBouquetSentiment(body)
        if(isValid.error) return {data:false,err:await error(isValid.error.message,400)}
        const success = await Shop.createBouquetSentiment(body.sentiment)
        if(!success) return {data:false,err:await error("Error in creating category",403)}
        return {data:true,err:''}
    },
    async updateBouquetSentiment(body){
        const isValid = await ShopValidation.updateBouquetSentiment(body)
        if(isValid.error) return {data:false,err:await error(isValid.error.message,400)}
        const success = await Shop.updateBouquetSentiment(body.sentiment,body.newSentiment)
        if(!success) return {data:false,err:await error("Error in updating category",403)}
        return {data:true,err:''}
    },
    async deleteBouquetSentiment(body){
        const isValid = await ShopValidation.deleteBouquetSentiment(body)
        if(isValid.error) return {data:false,err:await error(isValid.error.message,400)}
        const success = await Shop.deleteBouquetSentiment(body.sentiment)
        if(!success) return {data:false,err:await error("Error in deleting category",403)}
        return {data:true,err:''}
    },
    async addPlantType(type) {
        const isValid = await ShopValidation.vlalidatePlantType(type);
        if (isValid.error)
          return { data: false, err: await error(isValid.error.message, 400) };
        isFound = await ShopValidation.inPlantTypes(type);
        if (isFound)
          return { data: false, err: await error("This Type Already Exists", 403) };
        const typeObject = await Shop.addType(type);
        return { data: typeObject, err: "" };
      },
      async deletePlantType(type) {
        const isValid = await ShopValidation.vlalidatePlantType(type);
        if (isValid.error)
          return { data: false, err: await error(isValid.error.message, 400) };
        isFound = await ShopValidation.inPlantTypes(type);
        if (!isFound)
          return { data: false, err: await error("This Type Doesn't Exists", 403) };
        const typeObject = await Shop.deleteType(type);
        if (!typeObject)
          return { data: false, err: await error("Types Cannot be empty", 500) };
        return { data: typeObject, err: "" };
      },
      async getAllPlantsTypes(){
        const types = await Shop.getAllPlantsTypes();
        return { data: types, err: "" };
      },
      async getSalesPerMonth(){
        let users = await User.getUsers({Cart:1,_id:1});
        if(!users ||users.length==0)
        return { data: false, err: await error("No users found", 404) };
        let sales=Array(32).fill(0);
        var currentMonth = new Date( ).getMonth();
        if(currentMonth==0){
            currentMonth=11;
        }
        else{
        currentMonth=currentMonth-1;
        }
        let isEmpty=true;
        users.forEach(user => {
            for(let i=0;i<user.Cart.length;i++){
                if(user.Cart[i].status=="delivered"){
                  let orderDate= new Date(user.Cart[i].lastEdit);
                  let month = orderDate.getMonth();
                  if(month==currentMonth){
                    isEmpty=false;
                    let day = orderDate.getDate();
                    if(!sales[day]){sales[day]=0;}
                    sales[day]+=1;
                  }
                }
              }
        });
        if(isEmpty){
          return {data:[],err:""}
        }
        return { data: sales, err: "" };
    },
    async getTopUsers(limit){
      let users = await User.getUsers({Cart:1,_id:1,name:1});
      if(!users ||users.length==0)
      return { data: false, err: await error("No users found", 404) };
     for(let i=0;i<users.length;i++){
       for(let j=i+1;j<users.length;j++){
         if(users[i].Cart.length<users[j].Cart.length){
            let tmpUser = users[i];
            users[i]=users[j];
            users[j]=tmpUser;
         }
       }
     }
     let outUsers=[]
     for(let i=0;i<users.length;i++){
       let user={
         _id:users[i]._id,
         name:users[i].name,
         orders:users[i].Cart.length
       }
       outUsers.push(user)
     }
     if(!limit)limit=10;
     if(limit>outUsers.length)limit=outUsers.length;
     return {data:outUsers.slice(0,limit),err:""};
    }
}
module.exports = ShopService;