const OrderService = require("../services/order.service");
const OrderController = {
  async addItem(req, res) {
    const item = req.body;
    const userId = req.user._id;
    const data = await OrderService.addItem(userId, item);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async getOrderItems(req, res) {
    const userId = req.user._id;
    const data = await OrderService.getOrderItems(userId);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async deleteItem(req, res) {
    const itemId = req.params.itemid;
    const userId = req.user._id;
    const data = await OrderService.deleteItem(userId, itemId);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async changeOrderStatus(req,res){
    const userId = req.params.userId;
    const orderId = req.params.orderId;
    const status = req.query.status;
    const data = await OrderService.changeUserOrderStatus(userId, orderId,status);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  }
};
module.exports = OrderController;