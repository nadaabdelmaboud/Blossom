const User = require("../db/queries/user.queries");
const UserValidation = require("../validation/user.validation");
const error = require("../validation/error");

const UserService = {
  async getAllUsers(query) {
    const isValid = UserValidation.getAllUsersPaging(query);
    if (isValid.error)
      return { token: false, err: error(isValid.error.message, 400) };
    const users = await User.getAllUsersInfo(query);
    if (!users || users.length == 0)
      return { token: false, err: error("No Users Found", 404) };
    return { token: users, err: "" };
  },
  async getUser(user) {
    const isValid = UserValidation.validateID(user.id);
    if (!isValid) return { token: false, err: error("Invalid User ID", 400) };
    const userObject = await User.getUserInfo(user.id);
    if (!userObject || userObject.length == 0)
      return { token: false, err: error("Invalid User ID", 404) };
    return { token: userObject, err: "" };
  },
  async updateUser(user, id) {
    const isValid = UserValidation.validateID(id);
    if (!isValid) return { token: false, err: error("Invalid User ID", 404) };
    const isUserFound = User.findUserById(id);
    if(!isUserFound) return { token: false, err: error("Invalid User ID", 404) }; 
    if (!user || user.length==0) return { token: false, err: error("Data Is Missing", 400) };
    const isUserValid = UserValidation.updateUser(user);
    if (isUserValid.error) return { token: false, err: error(isUserValid.error.message,400) };
    const userObject = await User.updateUser(user, id);
    if (!userObject || userObject.length == 0)
      return { token: false, err: error("Error Updating User",500) };
    return { token: userObject, err: "" };
  },
  async deleteUser(user) {
    const isValid = UserValidation.validateID(user.id);
    if (!isValid) return { token: false, err: error("Invalid User ID", 400) };
    const userObject = await User.deleteUser(user.id);
    if (!userObject) return { token: false, err: error("User Not Found", 404) };
    return { token: userObject, err: "" };
  },
};

module.exports = UserService;
