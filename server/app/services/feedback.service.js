const FeedBack = require("../db/queries/feedback.queries");
const User = require("../db/queries/user.queries");
const MongooseValidation = require("../validation/mongoose.validation");
const FeedbackValidation = require("../validation/feedback.validation");
const error = require("../validation/error");
const FeedBackService = {
  async getCurrentUserFeedback(cartId, userId) {
    const FeedBackObject = await FeedBack.getCurrentUserFeedback(cartId, userId);
    if (FeedBackObject.length == 0)
      return { data: false, err: await error("Error Finding Cart", 404) };
    return { data: FeedBackObject, err: "" };
  },
  async addCurrentUserFeedback(cartId,userId,feedback) {
    if(!cartId)
      return { data: false, err: await error("Invalid Cart ID", 400) };
    const isValid = await FeedbackValidation.validateFeedback(feedback);
    if(isValid.error)
      return { data: false, err: await error(isValid.error.message, 400) };
    const FeedBackObject = await FeedBack.addCurrentUserFeedback(cartId, userId,feedback);
    if (!FeedBackObject|| FeedBackObject.length==0)
      return { data: false, err: await error("Error Finding Cart", 404) };
    return { data: FeedBackObject, err: "" };
  },
  async deleteCurrentUserFeedback(cartId, userId ,feedback) {
    if(!cartId)
      return { data: false, err: await error("Invalid Cart ID", 400) };
    var isValid = await FeedbackValidation.validateDeleteFeedback(feedback);
    if(!isValid)
      return { data: false, err: await error("No Deleting property Specified In The Request Body", 404) };
    isValid = await MongooseValidation.validateID(userId);
    if (!isValid)
      return { data: false, err: await error("Invalid User ID", 400) };
    const isUserFound = await User.findUserById(userId);
    if (!isUserFound)
      return { data: false, err: await error("Invalid User ID", 404) };
    const FeedBackObject = await FeedBack.deleteCurrentUserFeedback(cartId, userId,feedback);
    if (!FeedBackObject || FeedBackObject.length==0)
      return { data: false, err: await error("Error Finding Cart", 404) };
    return { data: FeedBackObject, err: "" };
  },
  async getTopReviews() {
    const FeedBackObject = await FeedBack.getTopReviews();
    if (!FeedBackObject)
      return { data: false, err: await error("no feedback found", 404) };
    return { data: FeedBackObject, err: "" };
  }
};
module.exports = FeedBackService;