const User = require("../db/queries/user.queries");
const Plant = require("../db/queries/plant.queries");
const Bouquet = require("../db/queries/bouquet.queries");
const UserValidation = require("../validation/user.validation");
const MongooseValidation = require('../validation/mongoose.validation')
const error = require("../validation/error");

const UserService = {
  async getAllUsers(query) {
    const isValid = await UserValidation.getAllUsersPaging(query);
    if (isValid.error)
      return { data: false, err: await error(isValid.error.message, 400) };
    const users = await User.getAllUsersInfo(query);
    if (!users || users.length == 0)
      return { data: false, err: await error("No Users Found", 404) };
    return { data: users, err: "" };
  },
  async getUser(user) {
    const isValid = await MongooseValidation.validateID(user.id);
    if (!isValid)
      return { data: false, err: await error("Invalid User ID", 400) };
    const userObject = await User.getUserInfo(user.id);
    if (!userObject || userObject.length == 0)
      return { data: false, err: error("Invalid User ID", 404) };
    return { data: userObject, err: "" };
  },
  async getCurrentUser(userId) {
    const userObject = await User.getCurrentUserInfo(userId);
    if (!userObject || userObject.length == 0)
      return { data: false, err: error("Invalid User ID", 404) };
    return { data: userObject, err: "" };
  },
  async updateUser(user, id) {
    const isValid = await MongooseValidation.validateID(id);
    if (!isValid)
      return { data: false, err: await error("Invalid User ID", 404) };
    const isUserFound = await User.findUserById(id);
    if (!isUserFound)
      return { data: false, err: await error("Invalid User ID", 404) };
    if (user.constructor === Object && Object.keys(user).length === 0)
      return { data: false, err: await error("Data Is Missing", 400) };
    const isUserValid = await UserValidation.updateUser(user);
    if (isUserValid.error)
      return { data: false, err: await error(isUserValid.error.message, 400) };
    const userObject = await User.updateUser(user, id);
    if (!userObject || userObject.length == 0)
      return { data: false, err: await error("Error Updating User", 500) };
    return { data: userObject, err: "" };
  },
  async deleteUser(user) {
    const isValid = await MongooseValidation.validateID(user.id);
    if (!isValid)
      return { data: false, err: await error("Invalid User ID", 400) };
    const userObject = await User.deleteUser(user.id);
    if (!userObject)
      return { data: false, err: await error("User Not Found", 404) };
    return { data: userObject, err: "" };
  },
  async addItem(userId, item) {
    const isValid = await MongooseValidation.validateID(userId);
    if (!isValid)
      return { data: false, err: await error("Invalid User ID", 400) };
    const isUserFound = await User.findUserById(userId);
    if (!isUserFound)
      return { data: false, err: await error("Invalid User ID", 404) };
    const isOrderVaild = await UserValidation.validateItem(item);
    if (isOrderVaild.error)
      return { data: false, err: await error(isOrderVaild.error.message, 400) };
    const idPlant = await Plant.getPlantById(item.bouquetId);
    const idBouquet = await Bouquet.getBouquetById(item.bouquetId);
    if (!idPlant && !idBouquet) {
      return {
        data: false,
        err: await error("No availabel bouquet/plant ID", 400),
      };
    }
    const userObject = await User.addItem(userId, item);
    if (!userObject)
      return { data: false, err: await error("Problem Adding Item", 500) };
    return { data: userObject, err: "" };
  },
  async getOrderItems(userId) {
    const isValid = await MongooseValidation.validateID(userId);
    if (!isValid)
      return { data: false, err: await error("Invalid User ID", 400) };
    const isUserFound = await User.findUserById(userId);
    if (!isUserFound)
      return { data: false, err: await error("Invalid User ID", 404) };
    const orderObject = await User.getOrderItems(userId);
    if (!orderObject)
      return { data: false, err: await error("Problem Adding Item", 500) };
    return { data: orderObject, err: "" };
  },
  async deleteItem(userId, itemId) {
    const isUserIdValid = await MongooseValidation.validateID(userId);
    if (!isUserIdValid)
      return { data: false, err: await error("Invalid User ID", 400) };
    const isItemIdValid = await MongooseValidation.validateID(itemId);
    if (!isItemIdValid)
      return { data: false, err: await error("Invalid Item ID", 400) };
    const isUserFound = await User.findUserById(userId);
    if (!isUserFound)
      return { data: false, err: await error("User Not Found", 404) };
    const idPlant = await Plant.getPlantById(itemId);
    const idBouquet = await Bouquet.getBouquetById(itemId);
    if (!idPlant && !idBouquet) {
      return {
        data: false,
        err: await error("No availabel bouquet/plant ID", 400),
      };
    }
    const itemObject = await User.deleteItem(userId, itemId);
    if (!itemObject)
      return { data: false, err: await error("Problem Deleting Item", 500) };
    return { data: itemObject, err: "" };
  },
};

module.exports = UserService;
