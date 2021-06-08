const CartValidation = require('../validation/cart.validation')
const MongooseValidation = require('../validation/mongoose.validation')
const Cart = require('../db/queries/cart.queries')
const User = require('../db/queries/user.queries')
const PayPal = require('./paypal.service')

const error = require('../validation/error');
const { paymentSuccess } = require('../controllers/cart.controller')

const CartService={
    async getUserCart(userId){
        const isValidId = await MongooseValidation.validateID(userId)
        if(!isValidId) return {data:false,err:await error("Not Valid ID",400)}
        const user = await User.findUserById(userId,{Cart:1,address:1});
        if(!user)  return {data:false,err:await error("No such user",404)};
        const cart = await Cart.getUserCart(user);
        if(!cart) return {data:false,err:await error("Couldn't retrieve cart",404)};
        return {data:cart,err:''};
    },
    async getUserAllCarts(userId,limit){
        const isValidId = await MongooseValidation.validateID(userId)
        if(!isValidId) return {data:false,err:await error("Not Valid ID",400)}
        const user = await User.findUserById(userId,{Cart:1,address:1});
        if(!user)  return {data:false,err:await error("No such user",404)};
        const carts = await Cart.getUserAllCarts(user,limit);
        if(!carts||carts.length==0) return {data:false,err:await error("no carts",404)};
        return {data:carts,err:''};
    },
    async emptyCart(userId){
        const isValidId = await MongooseValidation.validateID(userId)
        if(!isValidId) return {data:false,err:await error("Not Valid ID",400)}
        const user = await User.findUserById(userId,{Cart:1});
        if(!user)  return {data:false,err:await error("No such user",404)};
        console.log(user)
        const empty = await Cart.emptyCart(user);
        if(!empty) return {data:false,err:await error("Error in payment",400)};
        return {data:empty,err:''};
    },
    async buyCart(userId,address,paymentMethod){
        const isValidId = await MongooseValidation.validateID(userId)
        if(!isValidId) return {data:false,err:await error("Not Valid ID",400)}
        const isValidBuyData =await CartValidation.validPayment(paymentMethod);
        if (isValidBuyData.error)
        return { data: false, err: await error(isValidBuyData.error.message, 400) };
        const user = await User.findUserById(userId,{Cart:1,address:1});
        if(!user)  return {data:false,err:await error("No such user",404)};
        const paymentData = await Cart.buyCart(user,address,paymentMethod);
        if(!paymentData) return {data:false,err:await error("Error in payment",400)};
        console.log(paymentData);
        if(paymentMethod=="cash")return {data:true,err:''};
        const payment = await PayPal.setTransaction(paymentData.items,paymentData.totalPrice)
        await Cart.setPaymentId(user,payment.id,paymentData.cartId);
        return {data:payment.link,err:''};
    },
    async paymentSuccess(userId,paymentId,payerId){
      const isValidId = await MongooseValidation.validateID(userId)
      if(!isValidId) return {data:false,err:await error("Not Valid ID",400)}
      const user = await User.findUserById(userId,{Cart:1});
      if(!user)  return {data:false,err:await error("No such user",404)};
      const amount = await Cart.getAmountFromPaymentId(user,paymentId);
      const checkSuccess = await PayPal.success(payerId,paymentId,amount);
      if(!checkSuccess) return {data:false,err: await error("Error in payment",400)}; 
      return {data:true,err:''};
    },
    async changeUserCartStatus(userId,orderId,status){
        const isValidUserId = await MongooseValidation.validateID(userId);
        if (!isValidUserId)
          return { data: false, err: await error("Invalid User ID", 400) };
        const isValidOrderId = await MongooseValidation.validateID(orderId);
        if (!isValidOrderId)
          return { data: false, err: await error("Invalid Order ID", 400) };
        const isValidStatus = await CartValidation.validateStatus(status);
        if (isValidStatus.error)
        return { data: false, err: await error(isValidStatus.error.message, 400) };
        const user = await User.findUserById(userId,{Cart:1});
        if(!user)
          return { data: false, err: await error("No such user", 404) };
        console.log(orderId);
        const isChanged = await Cart.changeUserCartStatus(user,orderId,status);
        if(!isChanged)
          return { data: false, err: await error("Couldnt change order status", 404) };
        return { data: true, err:''};
      },
      async getAllCartsWithDefinedStatus(status,limit){
        const isValidStatus = await CartValidation.validateStatusLimit({status,limit});
        if (isValidStatus.error)
        return { data: false, err: await error(isValidStatus.error.message, 400) };
        const users = await User.getUsers({Cart:1,_id:1});
        if(!users ||users.length==0)
        return { data: false, err: await error("No users found", 404) };
        const carts = await Cart.getAllCartsWithDefinedStatus(users,status,limit);
        if(!carts ||carts.length==0)
        return { data: false, err: await error("No carts found", 404) };
        return { data: carts, err:''};

      },
      async getUserCarts(userId,limit){
        const isValidUserId = await MongooseValidation.validateID(userId);
        if (!isValidUserId)
          return { data: false, err: await error("Invalid User ID", 400) };
        const isValidLimit = await CartValidation.validateLimit({limit});
        if (isValidLimit.error)
        return { data: false, err: await error(isValidLimit.error.message, 400) };
        const user = await User.findUserById(userId,{Cart:1,_id:1});
        if(!user)
        return { data: false, err: await error("No users found", 404) };
        const carts = await Cart.getUserCarts(user,limit);
        if(!carts ||carts.length==0)
        return { data: false, err: await error("No carts found", 404) };
        return { data: carts, err:''};
    
      },
}

module.exports=CartService;