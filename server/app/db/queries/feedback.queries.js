const UserModel = require("../models/user.model");
const FeedBack = {
  async getCurrentUserFeedback(cartId, userId) {
    const result = await UserModel.find(
      { _id: userId, "Cart._id": cartId },
      { "Cart.feedback": 1, name: 1 }
    );
    return result;
  },
  async addCurrentUserFeedback(cartId, userId, feedback) {
    const Today = new Date();
    const User = await UserModel.find(
      { _id: userId, "Cart._id": cartId },
      { "Cart.feedback": 1, name: 1 }
    );
    if (feedback.comment) {
      User[0].Cart[0].feedback.comment = feedback.comment;
      User[0].Cart[0].feedback.feedbackDate = Today;
    }
    if (feedback.rate) {
      User[0].Cart[0].feedback.rate = feedback.rate;
      User[0].Cart[0].feedback.feedbackDate = Today;
    }
    const result = await User[0].save();
    return result;
  },
  async deleteCurrentUserFeedback(cartId, userId, feedback) {
    const Today = new Date();
    const User = await UserModel.find(
      { _id: userId, "Cart._id": cartId },
      { "Cart.feedback": 1, name: 1 }
    );
    if (feedback.comment) {
      User[0].Cart[0].feedback.comment = "";
      User[0].Cart[0].feedback.feedbackDate = Today;
    }
    if (feedback.rate) {
      User[0].Cart[0].feedback.rate = 0;
      User[0].Cart[0].feedback.feedbackDate = Today;
    }
    const result = await User[0].save();
    return result;
  },
  async getTopReviews() {
    const Users = await UserModel.find({}, { "Cart.feedback": 1, name: 1 })
      .sort({
        "Cart.feedback.rate": "desc",
        "Cart.feedback.feedbackDate": -1,
      })
      .limit(4);
    return Users;
  },
};
module.exports = FeedBack;
