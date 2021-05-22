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
    

}
module.exports=CartController;