const FeedBackService = require("../services/feedback.service");
const FeedBackController = {
  async getCurrentUserFeedback(req, res) {
    const cartId = req.params.cart_id;
    const userId = req.user._id;
    const data = await FeedBackService.getCurrentUserFeedback(cartId, userId);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async addCurrentUserFeedback(req, res) {
    console.log("req ",req.params.cart_id);
    const cartId = req.params.cart_id;
    const userId = req.user._id;
    const feedback = req.body;
    const data = await FeedBackService.addCurrentUserFeedback(
      cartId,
      userId,
      feedback
    );
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async deleteCurrentUserFeedback(req, res) {
    const cartId = req.params.cart_id;
    const userId = req.user._id;
    const feedback = req.body;
    const data = await FeedBackService.deleteCurrentUserFeedback(
      cartId,
      userId,
      feedback
    );
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async deleteUserFeedback(req, res) {
    const cartId = req.params.cart_id;
    const userId = req.params.user_id;
    const feedback = req.body;
    const data = await FeedBackService.deleteCurrentUserFeedback(
      cartId,
      userId,
      feedback
    );
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async getTopReviews(req, res) {
    const data = await FeedBackService.getTopReviews();
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  }
};
module.exports = FeedBackController;
