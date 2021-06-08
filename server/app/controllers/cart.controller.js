const CartService = require('../services/cart.service');

const CartController = {

    async getUserCart(req,res){
        const data = await CartService.getUserCart(req.params.userId);
        if (data.data) {
            return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
    },
      async getCurrentUserCart(req,res){
        const data = await CartService.getUserCart(req.user._id);
        if (data.data) {
            return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
    },
    async getUserAllCarts(req,res){
        const data = await CartService.getUserAllCarts(req.params.userId,req.query.limit);
        if (data.data) {
            return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
    },
    async emptyCart(req,res){
        const data = await CartService.emptyCart(req.user._id);
        if (data.data) {
            return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
    },
    async buyCart(req,res){
        const data = await CartService.buyCart(req.user._id,req.body.address,req.body.paymentMethod);
        if (data.data) {
            
            return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
    },
    async paymentSuccess(req,res){
      const payerId = req.query.PayerID;
      const paymentId = req.query.paymentId;
      const data = await CartService.paymentSuccess(req.user._id,paymentId,payerId);
      if (data.data) {
          
          return res.status(200).send(data.data);
      }
      res.status(data.err.status).send(data.err.message);

    },
    async changeCartStatus(req,res){
        const userId = req.params.userId;
        const orderId = req.params.cartId;
        const status = req.query.status;
        const data = await CartService.changeUserCartStatus(userId, orderId,status);
        if (data.data) {
          return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
      },
      async getAllCartsWithDefinedStatus(req,res){
        const limit = req.query.limit;
        const status = req.query.status;
        const data = await CartService.getAllCartsWithDefinedStatus(status,limit);
        if (data.data) {
          return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
      },
      async getUserCarts(req,res){
        const limit = req.query.limit;
        const status = req.query.status;
        const userId = req.user._id;
        const data = await CartService.getUserCarts(userId,limit);
        console.log(limit)
        if (data.data) {
          return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
      }
    
}
module.exports=CartController;