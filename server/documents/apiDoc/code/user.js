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
 * @api {get} api/users/:id Get User By Id
 * @apiName Get User By Id
 * @apiGroup User
 * @apiVersion 1.1.0
 * @apiPermission User
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
 * @api {put} api/users/:id Update User
 * @apiName Update User
 * @apiGroup User
 * @apiVersion 1.1.0
 * @apiPermission User
 *
 * @apiExample {curl} Example usage:
 *      curl --location --request PUT 'http://localhost:3000/api/users/608d666e7ff51820a8cb248d' \
 *
 * @apiParam (PathParameters) {String} id user id
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
 * @api {delete} api/users/:id delete user
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
 * @api {post} /users/:id/cart/orders add item to cart
 * @apiName add item
 * @apiGroup User
 * @apiVersion 1.1.0
 * @apiPermission User
 *
 * @apiExample {curl} Example usage:
 *      curl --location --request POST 'http://localhost:3000/api/users/6099e34312fb9933383b9c93/cart/orders' \
 *--data-raw '{
 *   "bouquetId":"608fe3662947f108c0fcdb0c",
 *   "amount":1,
 *   "orderType":"plant",
 *   "category":"flower"
 *}
 * @apiParam (PathParameters) {String} id user id
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
