const router = require('express').Router();
const AdminMiddleware = require('../middlewares/admin.middleware')
const AuthMiddleware = require('../middlewares/auth.middleware')
const CartController = require('../controllers/cart.controller')

//get current user cart -Require Only User Authorization -
router.get('/me/cart',AuthMiddleware,CartController.getCurrentUserCart)

//get another user cart -Require Admin Authorization -
router.get('/users/:userId/cart',AuthMiddleware,AdminMiddleware,CartController.getUserCart)



module.exports=router;