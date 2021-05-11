const router = require('express').Router();
const AdminMiddleware = require('../middlewares/admin.middleware')
const AuthMiddleware = require('../middlewares/auth.middleware')
const CartController = require('../controllers/cart.controller')
router.get('/users/:userId/cart',CartController.getUserCart)

module.exports=router;