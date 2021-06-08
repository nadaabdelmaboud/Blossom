const router = require("express").Router();
const AdminMiddleware = require("../middlewares/admin.middleware");
const AuthMiddleware = require("../middlewares/auth.middleware");
const FeedBackController = require("../controllers/feedback.controller");

router.get("/user/me/cart/:cart_id/feedback",AuthMiddleware,FeedBackController.getCurrentUserFeedback);
router.get("/user/admin/cart/feedback/top",FeedBackController.getTopReviews);
router.post("/user/me/cart/:cart_id/feedback",AuthMiddleware,FeedBackController.addCurrentUserFeedback);
router.delete("/user/me/cart/:cart_id/feedback",AuthMiddleware,FeedBackController.deleteCurrentUserFeedback);
router.delete("/user/:user_id/cart/:cart_id/feedback",AuthMiddleware,AdminMiddleware,FeedBackController.deleteUserFeedback);

module.exports = router;