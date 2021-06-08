const UserModel = require("../models/user.model");
const ShopModel = require("../models/shop.model");
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
      { _id: userId },
      { "Cart.feedback": 1, name: 1, "Cart._id": 1 }
    );
    if (!User || User.length == 0) return User;
    for (let i = 0; i < User[0].Cart.length; i++) {
      if (User[0].Cart[i]._id == cartId) {
        if (feedback.comment) {
          User[0].Cart[i].feedback.comment = feedback.comment;
          User[0].Cart[i].feedback.feedbackDate = Today;
        }
        if (feedback.rate) {
          const shop = await ShopModel.find({}, { topRatings: 1 });
          shop[0].topRatings[feedback.rate] += 1;
          shop[0].topRatings[User[0].Cart[i].feedback.rate] -= 1;
          shop[0].markModified("topRatings");
          await shop[0].save();
          User[0].Cart[i].feedback.rate = feedback.rate;
          User[0].Cart[i].feedback.feedbackDate = Today;
        }
        const result = await User[0].save();
        return result;
      }
    }
    return false;
  },
  async deleteCurrentUserFeedback(cartId, userId, feedback) {
    const Today = new Date();
    const User = await UserModel.find(
      { _id: userId },
      { "Cart.feedback": 1, name: 1, "Cart._id": 1 }
    );
    if (!User || User.length == 0) return User;

    for (let i = 0; i < User[0].Cart.length; i++) {
      if (User[0].Cart[i]._id == cartId) {
        if (feedback.comment) {
          User[0].Cart[i].feedback.comment = "";
          User[0].Cart[i].feedback.feedbackDate = Today;
        }
        if (feedback.rate) {
          const shop = await ShopModel.find({}, { topRatings: 1 });
          if (User[0].Cart[i].feedback.rate != 0) {
            shop[0].topRatings[0] += 1;
            shop[0].topRatings[User[0].Cart[i].feedback.rate] -= 1;
            shop[0].markModified("topRatings");
            await shop[0].save();
          }
          User[0].Cart[i].feedback.rate = 0;
          User[0].Cart[i].feedback.feedbackDate = Today;
        }
        const result = await User[0].save();
        return result;
      }
    }
    return false;
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
