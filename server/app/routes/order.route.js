const router = require("express").Router();
const OrderController = require("../controllers/order.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");

router.post("/users/cart/orders", AuthMiddleware, OrderController.addItem);
router.get("/users/cart/orders/",AuthMiddleware,OrderController.getOrderItems);
router.delete("/users/cart/orders/:itemid",AuthMiddleware,OrderController.deleteItem);
module.exports = router;