const UserModel = require("../models/user.model");
const Order = {
  async addItem(userId, item) {
    let today = new Date();
    const userData = await UserModel.findById(userId);
    /*userData.Cart[0] = {};
    userData.Cart[0].orders = {};
    userData.Cart[0].status = "pending";
    userData.Cart[0].address = userData.address;*/
    if (userData.Cart[0].orders[item.bouquetId]) {
      userData.Cart[0].orders[item.bouquetId].amount += item.amount;
    } else {
      userData.Cart[0].orders[item.bouquetId] = {
        amount: item.amount,
        orderType: item.orderType,
        category: item.category,
      };
    }
    userData.Cart[0].lastEdit = today;
    userData.markModified("Cart");
    const result = await userData.save();
    if (result) return result.Cart[0];
    return result;
  },
  async getOrderItems(userId) {
    const userData = await UserModel.findById(userId);
    if (userData) return userData.Cart[0].orders;
    return userData;
  },
  async deleteItem(userId, itemId) {
    const userData = await UserModel.findById(userId);
    if (userData.Cart[0].orders[itemId]) {
      if (Object.keys(userData.Cart[0].orders).length == 1)
        userData.Cart[0].orders = {};
      else delete userData.Cart[0].orders[itemId];
    } else return false;
    userData.markModified("Cart");
    const result = await userData.save();
    if (result) return result.Cart[0];
    return result;
  }
};
module.exports = Order;