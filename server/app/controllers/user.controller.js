const UserService = require('../services/user.service');
const UserController = {
  async getAllUsers(req, res) {
    const query = req.query;
    const data = await UserService.getAllUsers(query);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async getUser(req, res) {
    const user = req.params;
    const data = await UserService.getUser(user);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async getCurrentUser(req, res) {
    const userId = req.user._id;
    const data = await UserService.getCurrentUser(userId);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async updateUser(req, res) {
    const user = req.body;
    const id = req.user._id;
    const data = await UserService.updateUser(user, id);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async deleteUser(req, res) {
    const user = req.params;
    const data = await UserService.deleteUser(user);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async addItem(req, res) {
    const item = req.body;
    const userId = req.user._id;
    const data = await UserService.addItem(userId, item);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async getOrderItems(req, res) {
    const userId = req.user._id;
    const data = await UserService.getOrderItems(userId);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async deleteItem(req, res) {
    const itemId = req.params.itemid;
    const userId = req.user._id;
    const data = await UserService.deleteItem(userId, itemId);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
};
module.exports = UserController;