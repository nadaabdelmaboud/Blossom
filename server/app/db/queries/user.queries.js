const UserModel = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = {
  async findUserById(id, projection = { _id: 1 }) {
    const user = await UserModel.findById(id, projection);
    return user;
  },
  async findUserByEmail(email, projection = { _id: 1 }) {
    const user = await UserModel.findOne({ email: email }, projection);
    return user;
  },
  async comparePassword(user, password) {
    const checkUser = await user.comparePassword(password);
    if (checkUser) return true;
    else return false;
  },
  async createUser(user) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    const newUser = new UserModel({
      name: user.name,
      email: user.email,
      password: hash,
      address: user.address,
      phone: user.phone,
      creditCard: {
        cardNumber: 0,
        ccNumber: 0,
        expireDate: null,
      },
      Cart: [],
    });
    const userObject = await newUser.save();
    if (userObject) {
      return { _id: userObject._id };
    }
    return false;
  },
  async getUserInfo(id) {
    const qId = mongoose.Types.ObjectId(id);
    const user = await UserModel.aggregate()
      .match({ _id: qId })
      .project({
        Cart: { $size: "$Cart" },
        name: 1,
        email: 1,
        address: 1,
        phone: 1,
      });
    return user;
  },
  async getAllUsersInfo(query) {
    const pageSize = query.pageSize ? query.pageSize : 10;
    const pageNumber = query.pageNumber ? query.pageNumber : 1;
    const users = await UserModel.find(
      {},
      { name: 1, email: 1, address: 1, phone: 1 }
    )
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
    return users;
  },
  async deleteUser(id) {
    const user = await UserModel.findByIdAndRemove(id);
    return user;
  },
  async updateUser(user, id) {
    const userData = await UserModel.findById(id);
    if (!userData) return [];
    if (user.name) userData.name = user.name;
    if (user.email) userData.email = user.email;
    if (user.address) userData.address = user.address;
    if (user.phone) userData.phone = user.phone;
    if (user.password) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      userData.password = hash;
    }
    const result = await userData.save();
    return result;
  },
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
  },
};
module.exports = User;
