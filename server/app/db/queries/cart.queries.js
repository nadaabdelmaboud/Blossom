const UserModel = require('../models/user.model');
const PlantModel = require('../models/plants.model').PlantModel;
const BouquetModel = require('../models/bouquet.model').BouquetModel;

const client = require('../db.caching');
const  Mongoose  = require('mongoose');
const Cart = {
    async getUserCart(user){
        if(user.Cart.length==0){
           user =  await this.createCart(user);
        }
        return user.Cart[user.Cart.length-1];
    },
    async getUserAllCarts(user,limit){
        if(limit>user.Cart.length){
            limit=user.Cart.length;
        }
        return user.Cart.slice(user.Cart.length-limit,user.Cart.length-1);
    },
    async createCart(user){
        if(user.Cart.length==0||user.Cart[user.Cart.length-1].status!="empty"){
                user.Cart.push({
                    orders: {},
                    status:"empty",
                    address:user.address
                });
            user = await user.save();
        }
        return user;
    },
    async emptyCart(user){
        if(user.Cart.length==0||user.Cart[user.Cart.length-1].status!="ordering"){
            return true;
        }
        user.Cart[user.Cart.length-1].orders={};
        user.Cart[user.Cart.length-1].status="empty";
        await user.save();
        return true;
    },
    async buyCart(user){
        if(user.Cart.length==0||user.Cart[user.Cart.length-1].status!="ordering"){
            return false;
        }
        let price =0;
        for(order in user.Cart[user.Cart.length-1].orders){
            let orderObject = user.Cart[user.Cart.length-1].orders[order];
            if(orderObject.orderType=='Plant'){
                let plant = await PlantModel.findById(order,{price:1});
                if(!plant) return false;
                price +=(orderObject.amount*plant.price);
            }
            else if(orderObject.orderType=='Bouquet'){
                let bouquet = await BouquetModel.findById(order,{price:1});
                if(!bouquet) return false;
                price +=(orderObject.amount*bouquet.price);
            }
        }
        user.Cart[user.Cart.length-1].status="pending";
        user = await this.createCart(user);
    }
}
module.exports = Cart