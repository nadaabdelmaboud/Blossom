var paypal = require('paypal-rest-sdk');
const { promisify } = require('util');
const Cart =require('../db/queries/cart.queries');
exports.execute = promisify(paypal.payment.execute);
exports.create = promisify(paypal.payment.create);
paypal.configure({
    'mode': 'sandbox', 
    'client_id': 'ARfrnof-70w9ZqJoYN6RiXqabFe-tqFm4wc7hhjokwCOROMOdS5iT3PwDmmKpgnnTA_l_utXkPx3JMIk',
    'client_secret': 'EDOUMa_0M4amZD-P17PXCzHQZHJgZ3T4JMcOwc8_P2xd4TY8XqZaBCCR7WhCmH8zd4DFiSPSL3b3Q9nA'
  });
const return_url="http://localhost:8080/payment"
const cancel_url="http://localhost:8080/cancel_payment"

async function setTransaction(items,totalPrice){
        //Convert From EGP To USD
        let create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": return_url,
                "cancel_url": cancel_url
            },
            "transactions": [{
                "item_list": {
                    "items": items
                },
                "amount": {
                    "currency": "USD",
                    "total": parseInt(totalPrice)+".00"
                },
                "description": "Blossom Payment"
            }]
        };
        return await create(create_payment_json);
}
function create(create_payment_json){
        return new Promise(function(resolve,reject){
          paypal.payment.create(create_payment_json,function(error,payment){
            if(error){
             reject(error);
            }else{
                for(let i=0;i<payment.links.length;i++){
                    if(payment.links[i].rel==='approval_url'){
                        resolve({link:payment.links[i].href,id:payment.id});
                    }
                }
            }
          }
          )
        })
}

async function success(payerId,paymentId,amount){
    
    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": parseInt(amount)+".00"
            }
        }]
      };
      await execute(paymentId, execute_payment_json);
   
}

function execute(paymentId, execute_payment_json){
    return new Promise(function(resolve,reject){
        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                reject(error);
            } else {
                resolve(true);

            }
        }
        )
      })
};

module.exports={setTransaction,success};

