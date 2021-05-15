const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const AuthMiddleware = require('../middlewares/auth.middleware'); 
const AdminMiddleware = require('../middlewares/admin.middleware'); 

router.get("/users/",AuthMiddleware,AdminMiddleware, UserController.getAllUsers);
router.get("/users/:id",AuthMiddleware,AdminMiddleware,UserController.getUser);
router.get("/user/current",AuthMiddleware,UserController.getCurrentUser);
router.put("/users",AuthMiddleware, UserController.updateUser);
router.delete("/users/:id",AuthMiddleware,AdminMiddleware,UserController.deleteUser);
router.post("/users/cart/orders",AuthMiddleware,UserController.addItem);
router.get("/users/cart/orders/", AuthMiddleware, UserController.getOrderItems);
router.delete("/users/cart/orders/:itemid", AuthMiddleware, UserController.deleteItem);
module.exports = router;