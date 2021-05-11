const CartService = require('../services/cart.service');

const CartController = {

    async getUserCart(req,res){
        const data = CartService.getUserCart(req.params.userId);
        if (data.data) {
            return res.status(200).send(data.data);
        }
        res.status(data.err.status).send(data.err.message);
    }
    

}
module.exports=CartController;