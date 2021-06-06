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
  async getUsers(projection = { _id: 1 }){
    const users = await UserModel.find({}, projection);
    return users;
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
          status: "empty",
          address: user.address,
          feedback: {
            rate: 0,
            comment:""
          },
        },
      ],
    });
    const userObject = await newUser.save();
    if (userObject) {
      return { _id: userObject._id ,type:"user"};
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
  async getCurrentUserInfo(id) {
    const qId = mongoose.Types.ObjectId(id);
    const user = await UserModel.aggregate().match({ _id: qId }).project({
      name: 1,
      email: 1,
      address: 1,
      phone: 1,
      Cart: 1,
    });
    console.log(user[0])
    user[0].orders = Object.keys(user[0].Cart[0].orders).length;
    user[0].Cart = user[0].Cart.length;
    return user;
  },
  async getAllUsersInfo(query) {
    const count = await UserModel.countDocuments();
    const pageSize = query.pageSize ? query.pageSize : 10;
    const pageNumber = query.pageNumber ? query.pageNumber : 1;
    const users = await UserModel.find(
      {},
      { name: 1, email: 1, address: 1, phone: 1 }
    )
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
    return { users: users, maxPage: Math.ceil(count / pageSize) };
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
};
module.exports = User;
