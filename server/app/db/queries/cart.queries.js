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
                  "feedback.comment":"",
                  price:0
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
        user.Cart[user.Cart.length-1].price=0;
        await user.save();
        return true;
    },
    async buyCart(user,address){
      console.log(user.Cart)
        if(user.Cart.length==0||user.Cart[user.Cart.length-1].status!="ordering"){
            return false;
        }
        let totalPrice =0;
        let totalCashPrice=0;
        items=[]
        for(order in user.Cart[user.Cart.length-1].orders){
            let name,sku,quantity=''
            let price=0;
            let orderObject = user.Cart[user.Cart.length-1].orders[order];
            sku=order;
            quantity=orderObject.amount;
            if(orderObject.orderType=='plant'){
                let plant = await PlantModel.findById(order,{price:1,name:1});
                if(!plant) return false;
                name=plant.name;
                price=.064*plant.price;
                totalCashPrice+=(orderObject.amount*price);
            }
            else if(orderObject.orderType=='bouquet'){
                let bouquet = await BouquetModel.findById(order,{price:1,name:1});
                if(!bouquet) return false;
                name=bouquet.name;
                price=.064*bouquet.price;
                totalCashPrice+=(orderObject.amount*price);

            }
            let item={
                "name": name,
                "sku": sku,
                "price": parseInt(price)+".00",
                "currency": "USD",
                "quantity": quantity
            }
            totalPrice +=(orderObject.amount*parseInt(price));
            items.push(item)
        }
        user.Cart[user.Cart.length-1].status="pending";
        user.Cart[user.Cart.length-1].price=totalCashPrice;
        if(address){
            user.Cart[user.Cart.length-1].address=address;
        }
        await user.save();
        user = await this.createCart(user);
        return {items,totalPrice,totalCashPrice};
    },
    async changeUserCartStatus(user,orderId,status){
        if(user.Cart.length==0){
          return false;
        }
        let order=null;
        let index=0;
        for(let i=0;i<user.Cart.length;i++){
          if(user.Cart[i]._id==orderId){
            order = user.Cart[i];
            index=i;
            break;
          }
        }
        if(!order) return false;
        if(order.status!="pending" && order.status!="progress") return false;
        if(order.status=="pending" && status!="progress") return false;
        if(order.status=="progress" && status!="delivered") return false;
        user.Cart[index].status = status;
        user.Cart[index].lastEdit = new Date();
        await user.save();
        return true;
      },
      async getAllCartsWithDefinedStatus(users,status,limit){
        let Carts=[];
        users.forEach(async (user) => {
            for(let i=0;i<user.Cart.length;i++){
                if(user.Cart[i].status==status){
                  if(!user.Cart[i].price){
                    let orders = Object.values(user.Cart[i].orders);
                    user.Cart[i].price=0;
                    for(let j=0;j<orders.length;j++){
                      user.Cart[i].price+=(orders[j].amount*orders[j].price);
                    }
                    await user.save();
                  }
                  const firstOrderKey = Object.keys(user.Cart[i].orders)[0];
                  const cartImage = user.Cart[i].orders[firstOrderKey].image;
                  const cart={
                      userId:user._id,
                      lastEdit : user.Cart[i].lastEdit,
                      orders : Object.entries(user.Cart[i].orders),
                      price:user.Cart[i].price,
                      orderNumber:i,
                      feedback:user.Cart[i].feedback,
                      address:user.Cart[i].address,
                      image:cartImage,
                  }
                  Carts.push(cart)
                }
              }
        });
        Carts.sort(function(a,b){
            return new Date(b.lastEdit) - new Date(a.lastEdit);
          });
        if(Carts.length<=limit) return Carts;
        return Carts.slice(0,limit);
      },
      async getUserCartsWithDefinedStatus(user,status,limit){
        let Carts=[];
            for(let i=0;i<user.Cart.length;i++){
                if(user.Cart[i].status==status){
                  if(!user.Cart[i].price){
                    let orders = Object.values(user.Cart[i].orders);
                    user.Cart[i].price=0;
                    for(let j=0;j<orders.length;j++){
                      user.Cart[i].price+=(orders[j].amount*orders[j].price);
                    }
                    await user.save();
                  }
                  const firstOrderKey = Object.keys(user.Cart[i].orders)[0];
                  const cartImage = user.Cart[i].orders[firstOrderKey].image;
                  const cart={
                      userId:user._id,
                      lastEdit : user.Cart[i].lastEdit,
                      orders : Object.entries(user.Cart[i].orders),
                      price:user.Cart[i].price,
                      orderNumber:i,
                      feedback:user.Cart[i].feedback,
                      address:user.Cart[i].address,
                      image:cartImage,
                  }
                  Carts.push(cart)
                }
              }
        
        Carts.sort(function(a,b){
            return new Date(b.lastEdit) - new Date(a.lastEdit);
          });
        if(Carts.length<=limit) return Carts;
        return Carts.slice(0,limit);
      }
}
module.exports = Cart

