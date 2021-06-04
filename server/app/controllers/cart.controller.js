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
    async getCurrentUserAllCarts(req,res){
        const data = await CartService.getUserAllCarts(req.user._id,req.query.limit);
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
        const data = await CartService.buyCart(req.user._id);
        if (data.data) {
            return res.redirect(data.data);
        }
        res.status(data.err.status).send(data.err.message);
    }
    
}
module.exports=CartController;