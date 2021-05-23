const UserModel = require("../models/user.model");
const Order = {
  async addItem(userId, item) {
    let today = new Date();
    const UserData = await UserModel.findById(userId);
    const Index = UserData.Cart.length - 1;
    if(!UserData.Cart[Index].orders){
      UserData.Cart[Index].orders={}
    }
    /*userData.Cart[Index] = {};
    userData.Cart[Index].orders = {};
    userData.Cart[Index].status = "pending";
    userData.Cart[Index].address = userData.address;*/
    if (UserData.Cart[Index].orders[item.bouquetId]) {
      UserData.Cart[Index].orders[item.bouquetId].amount += item.amount;
    } else {
      UserData.Cart[Index].orders[item.bouquetId] = {
        amount: item.amount,
        orderType: item.orderType,
        category: item.category,
      };
    }
    UserData.Cart[Index].lastEdit = today;
    UserData.Cart[Index].status = "ordering";
    UserData.markModified("Cart");
    const result = await UserData.save();
    if (result) return result.Cart[Index];
    return result;
  },
  async getOrderItems(userId) {
    const UserData = await UserModel.findById(userId);
    if (UserData) return UserData.Cart[UserData.Cart.length - 1].orders;
    return UserData;
  },
  async deleteItem(userId, itemId) {
    const UserData = await UserModel.findById(userId);
    const Index = UserData.Cart.length - 1;
    let amount;
    if (UserData.Cart[Index].orders[itemId]) {
      amount = UserData.Cart[Index].orders[itemId];
      if (Object.keys(UserData.Cart[Index].orders).length == 1) {
        UserData.Cart[Index].orders = {};
        UserData.Cart[Index].status = "empty";
      } else delete UserData.Cart[Index].orders[itemId];
    } else return false;
    UserData.markModified("Cart");
    const result = await UserData.save();
    if (result) return {result:result.Cart[Index],amount:amount.amount};
    return result;
  },
};
module.exports = Order;
