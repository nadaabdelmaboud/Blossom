const router = require("express").Router();
const OrderController = require("../controllers/order.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const AdminMiddleware = require("../middlewares/admin.middleware");

router.post("/users/cart/orders", AuthMiddleware, OrderController.addItem);
router.get("/users/cart/orders/",AuthMiddleware,OrderController.getOrderItems);
router.delete("/users/cart/orders/:itemid",AuthMiddleware,OrderController.deleteItem);
router.put("/users/:userId/order/:orderId",AuthMiddleware,AdminMiddleware,OrderController.changeOrderStatus);

module.exports = router;