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
                  status: "empty",
                  address: user.address,
                  "feedback.rate":0,
                  "feedback.comment":""
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
    async buyCart(user,address){
        if(user.Cart.length==0||user.Cart[user.Cart.length-1].status!="ordering"){
            return false;
        }
        let totalPrice =0;
        items=[]
        for(order in user.Cart[user.Cart.length-1].orders){
            let name,sku,price,quantity=''
            let orderObject = user.Cart[user.Cart.length-1].orders[order];
            sku=order;
            quantity=orderObject.amount;
            if(orderObject.orderType=='plant'){
                let plant = await PlantModel.findById(order,{price:1,name:1});
                if(!plant) return false;
                name=plant.name;
                price=.064*plant.price;
                totalPrice +=(orderObject.amount*price);
            }
            else if(orderObject.orderType=='bouquet'){
                let bouquet = await BouquetModel.findById(order,{price:1,name:1});
                if(!bouquet) return false;
                name=bouquet.name;
                price=.064*bouquet.price;
                totalPrice +=(orderObject.amount*price);
            }
            let item={
                "name": name,
                "sku": sku,
                "price": parseInt(price)+".00",
                "currency": "USD",
                "quantity": quantity
            }
            items.push(item)
        }
        user.Cart[user.Cart.length-1].status="pending";
        if(address){
            user.Cart[user.Cart.length-1].address=address;
        }
        await user.save();
        user = await this.createCart(user);
        return {items,totalPrice};
    }
}
module.exports = Cart