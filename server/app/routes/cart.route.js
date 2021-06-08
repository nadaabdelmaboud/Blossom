const router = require('express').Router();
const AdminMiddleware = require('../middlewares/admin.middleware')
const AuthMiddleware = require('../middlewares/auth.middleware')
const CartController = require('../controllers/cart.controller')

//get current user cart -Require Only User Authorization -
router.get('/me/cart',AuthMiddleware,CartController.getCurrentUserCart)

//get another user cart -Require Admin Authorization -
router.get('/users/:userId/cart',AuthMiddleware,AdminMiddleware,CartController.getUserCart)

//get current user past carts -Require Only User Authorization -
router.get('/me/carts',AuthMiddleware,CartController.getUserCarts)

//get another user past carts -Require Admin Authorization -
router.get('/users/:userId/carts',AuthMiddleware,AdminMiddleware,CartController.getUserAllCarts)

//empty cart
router.delete('/me/cart',AuthMiddleware,CartController.emptyCart)

//buy cart
router.post('/me/cart',AuthMiddleware,CartController.buyCart)

router.get('/me/cart/success',AuthMiddleware,CartController.paymentSuccess)
//change status
router.put("/users/:userId/cart/:cartId",AuthMiddleware,AdminMiddleware,CartController.changeCartStatus);



router.get("/users/carts/status",AuthMiddleware,AdminMiddleware,CartController.getAllCartsWithDefinedStatus);

module.exports=router;