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
      Cart: [
        {
          orders: {},
          status:"empty",
          address:user.address
        }
      ]
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
  async addOrder(userId, order) {
    let today = new Date();
    const userData = await UserModel.findById(userId);
    if (userData.Cart[0].orders[order.bouquetId]) {
      userData.Cart[0].orders[order.bouquetId].amount += order.amount;
    } else {
      userData.Cart[0].orders[order.bouquetId] = {
        amount: order.amount,
        orderType: order.orderType,
        category: order.category,
      };
    }
    userData.Cart[0].lastEdit = today;
    const result = await userData.save();
    return result;
  },
};
module.exports = User;
