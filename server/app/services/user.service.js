const User = require("../db/queries/user.queries");
const UserValidation = require("../validation/user.validation");
const MongooseValidation = require('../validation/mongoose.validation')
const error = require("../validation/error");

const UserService = {
  async getAllUsers(query) {
    const isValid = await UserValidation.getAllUsersPaging(query);
    if (isValid.error)
      return { data: false, err:await error(isValid.error.message, 400) };
    const users = await User.getAllUsersInfo(query);
    if (!users || users.length == 0)
      return { data: false, err:await error("No Users Found", 404) };
    return { data: users, err: "" };
  },
  async getUser(user) {
    const isValid = await MongooseValidation.validateID(user.id);
    if (!isValid) return { data: false, err:await error("Invalid User ID", 400) };
    const userObject = await User.getUserInfo(user.id);
    if (!userObject || userObject.length == 0)
      return { data: false, err: error("Invalid User ID", 404) };
    return { data: userObject, err: "" };
  },
  async updateUser(user, id) {
    const isValid = await MongooseValidation.validateID(id);
    if (!isValid) return { data: false, err:await error("Invalid User ID", 404) };
    const isUserFound = await User.findUserById(id);
    if(!isUserFound) return { data: false, err:await error("Invalid User ID", 404) }; 
    if (user.constructor === Object && Object.keys(user).length === 0)
      return { data: false, err: await error("Data Is Missing", 400) };
    const isUserValid = await UserValidation.updateUser(user);
    if (isUserValid.error) return { data: false, err:await error(isUserValid.error.message,400) };
    const userObject = await User.updateUser(user, id);
    if (!userObject || userObject.length == 0)
      return { data: false, err:await error("Error Updating User",500) };
    return { data: userObject, err: "" };
  },
  async deleteUser(user) {
    const isValid = await MongooseValidation.validateID(user.id);
    if (!isValid) return { data: false, err:await error("Invalid User ID", 400) };
    const userObject = await User.deleteUser(user.id);
    if (!userObject) return { data: false, err:await error("User Not Found", 404) };
    return { data: userObject, err: "" };
  },
};

module.exports = UserService;
