const CartValidation = require('../validation/cart.validation')
const MongooseValidation = require('../validation/mongoose.validation')
const Cart = require('../db/queries/cart.queries')
const User = require('../db/queries/user.queries')

const error = require('../validation/error');
const { createCart } = require('../db/queries/cart.queries');

const CartService={
    async getUserCart(userId){
        const isValidId = await MongooseValidation.validateID(userId)
        if(!isValidId) return {data:false,err:await error("Not Valid ID",400)}
        const user = await User.findUserById(userId,{Cart:1});
        if(!user)  return {data:false,err:await error("No such user",404)};
        const cart = await Cart.getUserCart(user);
        if(!cart) return {data:false,err:await error("Couldn't retrieve cart",404)};
        return {data:cart,err:''};
    },
    async getUserAllCarts(userId){
        const isValidId = await MongooseValidation.validateID(userId)
        if(!isValidId) return {data:false,err:await error("Not Valid ID",400)}
        const user = await User.findUserById(userId,{Cart:1});
        if(!user)  return {data:false,err:await error("No such user",404)};
        const carts = await Cart.getUserAllCarts(user);
        if(!carts||carts.length==0) return {data:false,err:await error("no carts",404)};
        return {data:carts,err:''};
    },
    async buyCart(userId,creditCard,saveCredit){
        const isValidId = await MongooseValidation.validateID(userId)
        if(!isValidId) return {data:false,err:await error("Not Valid ID",400)}
        const user = await User.findUserById(userId,{Cart:1});
        if(!user)  return {data:false,err:await error("No such user",404)};
    }
}

module.exports=CartService;