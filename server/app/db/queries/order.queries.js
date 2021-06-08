const UserModel = require("../models/user.model");
const Order = {
  async addItem(userId, item, ExtraInfo) {
    let today = new Date();
    const UserData = await UserModel.findById(userId, "Cart");
    const Index = UserData.Cart.length - 1;
    if (!UserData.Cart[Index].orders) {
      UserData.Cart[Index].orders = {};
    }
    if (UserData.Cart[Index].orders[item.bouquetId]) {
      UserData.Cart[Index].orders[item.bouquetId].amount += item.amount;
    } else {
      UserData.Cart[Index].orders[item.bouquetId] = {
        amount: item.amount,
        orderType: item.orderType,
        category: item.category,
        name: ExtraInfo.name,
        price: ExtraInfo.price,
        images: ExtraInfo.images,
      };
    }
    UserData.Cart[Index].lastEdit = today;
    UserData.Cart[Index].status = "ordering";
    UserData.markModified("Cart");
    const result = await UserData.save();
    if (result) return { status: 1, cartID: result._id };
    return result;
  },
  async getOrderItems(userId) {
    const UserData = await UserModel.findById(userId, "Cart");
    if (UserData) {
      let items = UserData.Cart[UserData.Cart.length - 1].orders;
      let result = {};
      let plantId = [];
      let bouquetId = [];
      for (var id in items) {
        if (Object.prototype.hasOwnProperty.call(items, id)) {
          if (items[id].orderType == "plant") plantId.push(id);
          else bouquetId.push(id);
        }
      }
      result.UserData = items;
      result.plantId = plantId;
      result.bouquetId = bouquetId;
      return result;
    }
    return UserData;
  },
  async deleteItem(userId, itemId) {
    const UserData = await UserModel.findById(userId, "Cart");
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
    if (result) return { result: result.Cart[Index], amount: amount.amount };
    return result;
  },
  async formateItems(items) {
    if (!items) return [];
    var orderItems = [];
    Object.keys(items).forEach(function (item) {
      var obj = items[item];
      obj._id = item;
      orderItems.push(obj);
    });
    return orderItems;
  },
};
module.exports = Order;
