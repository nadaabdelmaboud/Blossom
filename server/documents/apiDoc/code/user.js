/**
 * @api {get} api/users Get All Users
 * @apiName Get All Users
 * @apiGroup User
 * @apiVersion 1.1.0
 * @apiPermission Admin
 *
 * @apiExample {curl} Example usage:
 *      curl --location --request GET 'http://localhost:3000/api/users?pageNumber=1&pageSize=10' \
 *
 * @apiParam (QueryParameters) {Number} [pageNumber=1] page number
 * @apiParam (QueryParameters) {Number} [pageSize=10] max number of plants displayed in the page
 *
 * @apiSuccess {Object} address user count
 * @apiSuccess {String} address.country user country
 * @apiSuccess {String} address.city user country
 * @apiSuccess {String} address.street user country
 * @apiSuccess {Number} address.buildingNo user building number
 * @apiSuccess {Number} address.apartmentNo user apartment number
 * @apiSuccess {String} _id user id
 * @apiSuccess {String} email user email
 * @apiSuccess {String} name user name
 * @apiSuccess {String} phone user phone number
 * @apiSuccess {Number} maxPage max pages available
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 {
    "users": [
        {
            "_id": "6089d14c3323d34078fba7d9",
            "name": "Nada",
            "email": "nada@gmail.com",
            "address": {
                "country": "egypt",
                "city": "giza",
                "street": "abdelzaher",
                "buildingNo": 20,
                "apartmentNo": 5
            },
            "phone": "01283176585"
        },
        {
            "_id": "6093e0c547edeb70146b26a4",
            "name": "Menna",
            "email": "menna123mahmoud@gmail.com",
            "address": {
                "country": "egypt",
                "city": "Cairo",
                "street": "Elfostat",
                "buildingNo": "83",
                "apartmentNo": "43"
            },
            "phone": "01066761053"
        }
    ],
    "maxPage": 3
}
 */

/**
 * @api {get} api/users/:id Get User By Id
 * @apiName Get User By Id
 * @apiGroup User
 * @apiVersion 1.1.0
 * @apiPermission Admin
 *
 * @apiExample {curl} Example usage:
 *      curl --location --request GET 'http://localhost:3000/api/users/6089d14c3323d34078fba7d9' \
 *
 * @apiParam (PathParameters) {String} id user id
 *
 * @apiSuccess {Object} address user count
 * @apiSuccess {String} address.country user country
 * @apiSuccess {String} address.city user country
 * @apiSuccess {String} address.street user country
 * @apiSuccess {Number} address.buildingNo user building number
 * @apiSuccess {Number} address.apartmentNo user apartment number
 * @apiSuccess {String} _id user id
 * @apiSuccess {String} email user email
 * @apiSuccess {String} name user name
 * @apiSuccess {String} phone user phone number
 * @apiSuccess {Object[]} Cart array of all user's orders
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 [
    {
        "_id": "6089d14c3323d34078fba7d9",
        "name": "Nada",
        "email": "nada@gmail.com",
        "address": {
            "country": "egypt",
            "city": "giza",
            "street": "abdelzaher",
            "buildingNo": 20,
            "apartmentNo": 5
        },
        "phone": "01283176585",
        "Cart": []
    }
]
 */

/**
 * @api {get} api/user/current Get Current User
 * @apiName Get Current User
 * @apiGroup User
 * @apiVersion 1.1.0
 * @apiPermission User
 *
 * @apiExample {curl} Example usage:
 *      curl --location --request GET 'http://localhost:3000/api/user/current' \
 *
 *
 * @apiSuccess {Object} address user count
 * @apiSuccess {String} address.country user country
 * @apiSuccess {String} address.city user country
 * @apiSuccess {String} address.street user country
 * @apiSuccess {Number} address.buildingNo user building number
 * @apiSuccess {Number} address.apartmentNo user apartment number
 * @apiSuccess {String} _id user id
 * @apiSuccess {String} email user email
 * @apiSuccess {String} name user name
 * @apiSuccess {String} phone user phone number
 * @apiSuccess {String} type user or admin
 * @apiSuccess {Number} Cart number of carts of the user
 * @apiSuccess {Number} orders number of items inside the cart
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 [
    {
        "_id": "6089d14c3323d34078fba7d9",
        "name": "Nada",
        "email": "nada@gmail.com",
        "address": {
            "country": "egypt",
            "city": "giza",
            "street": "abdelzaher",
            "buildingNo": 20,
            "apartmentNo": 5
        },
        "phone": "01283176585",
        "Cart": 1,
        "orders": 2,
        "type": "user"
    }
]
 */

/**
 * @api {put} api/users Update User
 * @apiName Update User
 * @apiGroup User
 * @apiVersion 1.1.0
 * @apiPermission User
 *
 * @apiExample {curl} Example usage:
 *      curl --location --request PUT 'http://localhost:3000/api/users' \
 *
 *
 * @apiParam (BodyParameters) {Object} [address] user count
 * @apiParam (BodyParameters) {String} [address.country] user country
 * @apiParam (BodyParameters) {String} [address.city] user country
 * @apiParam (BodyParameters) {String} [address.street] user country
 * @apiParam (BodyParameters) {Number} [address.buildingNo] user building number
 * @apiParam (BodyParameters) {Number} [address.apartmentNo] user apartment number
 * @apiParam (BodyParameters) {String} [email] user email
 * @apiParam (BodyParameters) {String} [name] user name
 * @apiParam (BodyParameters) {String} [phone] user phone number
 * 
 * @apiSuccess {Object} address user count
 * @apiSuccess {String} address.country user country
 * @apiSuccess {String} address.city user country
 * @apiSuccess {String} address.street user country
 * @apiSuccess {Number} address.buildingNo user building number
 * @apiSuccess {Number} address.apartmentNo user apartment number
 * @apiSuccess {String} email user email
 * @apiSuccess {String} name user name
 * @apiSuccess {String} phone user phone number
 * @apiSuccess {Object} creditCard credit card info
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
    "creditCard": {
        "cardNumber": 0,
        "ccNumber": 0,
        "expireDate": null
    },
    "_id": "608d666e7ff51820a8cb248d",
    "name": "hager",
    "email": "hager@gmail.com",
    "password": "$2b$10$/bD5c6Y/jT35zBvDtIXZAOInn8X8aCT9k24FzcurgpB4uFOUHdEka",
    "address": {
        "country": "alexandria",
        "city": "aboer",
        "street": "seastreet",
        "buildingNo": 5,
        "apartmentNo": 6
    },
    "phone": "01165655744",
    "Cart": [],
    "__v": 0
}
 */

/**
 * @api {delete} api/users/:id Delete User
 * @apiName delete user
 * @apiGroup User
 * @apiVersion 1.1.0
 * @apiPermission Admin
 *
 * @apiExample {curl} Example usage:
 *      curl --location --request DELETE 'http://localhost:3000/api/users/608d666e7ff51820a8cb248d'
 *
 * @apiParam (PathParameters) {String} id user id
 *
 * @apiSuccess {Object} address user count
 * @apiSuccess {String} address.country user country
 * @apiSuccess {String} address.city user country
 * @apiSuccess {String} address.street user country
 * @apiSuccess {Number} address.buildingNo user building number
 * @apiSuccess {Number} address.apartmentNo user apartment number
 * @apiSuccess {String} _id user id
 * @apiSuccess {String} email user email
 * @apiSuccess {String} name user name
 * @apiSuccess {String} phone user phone number
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 [
    {
        "_id": "6089d14c3323d34078fba7d9",
        "name": "Nada",
        "email": "nada@gmail.com",
        "address": {
            "country": "egypt",
            "city": "giza",
            "street": "abdelzaher",
            "buildingNo": 20,
            "apartmentNo": 5
        },
        "phone": "01283176585"
    },
    {
        "_id": "608d666e7ff51820a8cb248d",
        "name": "hager",
        "email": "hager@gmail.com",
        "address": {
            "country": "alexandria",
            "city": "aboer",
            "street": "seastreet",
            "buildingNo": 5,
            "apartmentNo": 6
        },
        "phone": "01165655744"
    }
]
 */

/**
 * @api {post} /users/cart/orders Add Item 
 * @apiName add item to cart
 * @apiGroup User
 * @apiVersion 1.1.0
 * @apiPermission User
 *
 * @apiExample {curl} Example usage:
 *      curl --location --request POST 'http://localhost:3000/api/users/cart/orders' \
 *--data-raw '{
 *   "bouquetId":"608fe3662947f108c0fcdb0c",
 *   "amount":1,
 *   "orderType":"plant",
 *   "category":"flower"
 *}
 *
 * @apiParam (BodyParameters) {String} bouquetId item id
 * @apiParam (BodyParameters) {Number} amount item amount
 * @apiParam (BodyParameters) {String} orderType item type (plant or bouquetId)
 * @apiParam (BodyParameters) {String} category item category 
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
    "_id": "6099e46231a2c759a833803a",
    "orders": {
        "608fe3662947f108c0fcdb0c": {
            "amount": 3,
            "orderType": "plant",
            "category": "herb"
        }
    },
    "lastEdit": "2021-05-11T02:43:45.224Z",
    "address": {
        "country": "alex",
        "city": "cairo",
        "street": "aboear",
        "buildingNo": 5,
        "apartmentNo": 3
    },
    "status": "pending"
}
 */

/**
 * @api {delete} /users/cart/orders/:itemid Delete Item
 * @apiName delete item from current cart
 * @apiGroup User
 * @apiVersion 1.1.0
 * @apiPermission User
 *
 * @apiExample {curl} Example usage:
 *      curl --location --request DELETE 'http://localhost:3000/api/users/cart/orders/608ff1141485280f2c7ba5bb' \
 * 
 * @apiParam (PathParameters) {String} itemid item (boquet/plant to remove) id 
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
    "_id": "609c49726d4c4e2a789f6e32",
    "orders": {
        "6093f1545604aa1b3c911672": {
            "amount": 2,
            "orderType": "bouquet",
            "category": "Tulips"
        },
        "6090043a8410d235d0097a21": {
            "amount": 3,
            "orderType": "plant",
            "category": "herb"
        }
    },
    "status": "pending",
    "address": {
        "country": "alex",
        "city": "cairo",
        "street": "aboear",
        "buildingNo": 5,
        "apartmentNo": 3
    },
    "lastEdit": "2021-05-12T21:34:05.817Z"
}
 */

/**
 * @api {get} /users/cart/orders/ Get Order Items
 * @apiName get order items of the current cart
 * @apiGroup User
 * @apiVersion 1.1.0
 * @apiPermission User
 *
 * @apiExample {curl} Example usage:
 *      curl --location --request POST 'http://localhost:3000/api/users/cart/orders' \
 * 
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
    "6090043a8410d235d0097a21": {
        "amount": 18,
        "orderType": "plant",
        "category": "herb",
        "name": "sunflower",
        "images": "Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg",
        "price": 1000,
        "count": {
            "sold": 0,
            "available": 0
        }
    },
    "608fe99514f3af4878571a6a": {
        "amount": 4,
        "orderType": "plant",
        "category": "herb",
        "name": "bleeding heart",
        "images": "Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg",
        "price": 600,
        "count": {
            "sold": 0,
            "available": 2
        }
    },
    "6093f1545604aa1b3c911672": {
        "amount": 1,
        "orderType": "bouquet",
        "category": "Tulips",
        "name": "Tuli",
        "images": "Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg",
        "price": 100,
        "count": {
            "sold": 0,
            "available": 1
        }
    }
} */
