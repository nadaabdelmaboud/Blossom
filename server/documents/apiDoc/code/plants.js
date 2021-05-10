/**
 * @api {get} api/plant Get All Plants
 * @apiName Get All Plants
 * @apiGroup Plant
 * @apiVersion 1.1.0
 * @apiDescription this request retruns all the plant in the database and doesn't return the plants tips.
 * @apiPermission None
 * 
 * @apiExample {curl} Example usage:
 *      curl --location --request GET 'http://localhost:3000/api/plant?pageNumber=1&pageSize=10' \
 * 
 * @apiParam (QueryParameters) {Number} [pageNumber=1] page number
 * @apiParam (QueryParameters) {Number} [pageSize=10] max number of plants displayed in the page
 * @apiParam (QueryParameters) {Boolean} [hasTips] when true the tips of the plants are returned
 * @apiParam (QueryParameters) {String="vegetable", "fruit" , "herb" , "flower" ,"house plant"} [type] plant type
 * 
 * @apiSuccess {Object} count plant count
 * @apiSuccess {Number} count.sold  the plants sold count
 * @apiSuccess {Number} count.available  the plants available count
 * @apiSuccess {String} image plant image
 * @apiSuccess {String} _id plant id
 * @apiSuccess {String="vegetable", "fruit" , "herb" , "flower" ,"house plant"} type plant type
 * @apiSuccess {String} name plant name
 * @apiSuccess {Number} price plant price
 * @apiSuccess {String} info plant information
 * @apiSuccess {String} image plant image
 * @apiSuccess {String[]} tips array of strings returned if the hasTips parameter is true
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "count": {
 *              "sold": 0,
 *              "available": 4
 *              },
 *              "image": "Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg",
 *              "_id": "608fe3662947f108c0fcdb0c",
 *              "name": "lavender",
 *              "type": "herb",
 *              "price": 300,
 *              "info": "Lavender is a bushy, strong-scented perennial plant from the Mediterranean. In warmer regions, its gray to green foliage stays evergreen throughout the year, and the herb thrives in some of the toughest of garden condition. Here’s how to plant, grow, and harvest lavender in the garden."
 *          },
 *         {
 *              "count": {
 *              "sold": 0,
 *              "available": 6
 *              },
 *              "image": "Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg",
 *              "_id": "608fe99514f3af4878571a6a",
 *              "name": "bleeding heart",
 *              "type": "flower",
 *              "price": 600,
 *              "info": "The old-fashioned bleeding heart is a favorite perennial of the shady flower garden and was called the finest hardy plant of the 19th century."
 *          }
 * 
 *      ]
 *
 * 
 */



/**
 * @api {get} api/plant/:id Get Plant By Id
 * @apiName Get Plant By Id
 * @apiGroup Plant
 * @apiVersion 1.1.0
 * @apiDescription this request retruns all the plant info.
 * @apiPermission None
 * 
 * @apiExample {curl} Example usage:
 *          curl --location --request GET 'http://localhost:3000/api/plant/6090043a8410d235d0097a21' \
 *  
 * @apiParam (PathParameters) {String} id plant id
 * 
 * 
 * @apiSuccess {Object} count plant count
 * @apiSuccess {Number} count.sold  the plants sold count
 * @apiSuccess {Number} count.available  the plants available count
 * @apiSuccess {String} image plant image
 * @apiSuccess {String} _id plant id
 * @apiSuccess {String} type plant type
 * @apiSuccess {String} name plant name
 * @apiSuccess {Number} price plant price
 * @apiSuccess {String} info plant information
 * @apiSuccess {String[]} tips tips about planting the plants
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     
 *         {
 *              "count": {
 *              "sold": 0,
 *              "available": 6
 *              },
 *              "image": "Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg",
 *              "_id": "608fe99514f3af4878571a6a",
 *              "name": "bleeding heart",
 *              "type": "flower",
 *              "price": 600,
 *              "info": "The old-fashioned bleeding heart is a favorite perennial of the shady flower garden and was called the finest hardy plant of the 19th century."
 *              "tips": [
 *                      "Plant in the spring after the threat of frost has passed.",
 *                      "Plant in the shade.",
 *                      "Add compost to the soil before planting.",
 *                      "Soak the soil around the plant until moist.",
 *                      "Add mulch to keep moisture in and weeds out."
 *                      ]
 *          }
 *
 * 
 */


/**
 * @api {put} api/plant/:id Update Plant
 * @apiName Update Plant
 * @apiGroup Plant
 * @apiVersion 1.1.0
 * @apiPermission Admin
 * 
 * @apiExample {curl} Example usage:
 *          curl --location --request PUT 'http://localhost:3000/api/plant/6090043a8410d235d0097a21' \
 *          --data-raw '{
 *                      "price":500
 *                  }'
 *  
 * @apiHeader {String} Authorization token
 * @apiParam (PathParameters) {String} id plant id
 * 
 * @apiParam (BodyParameters) {Object} [count] plant count
 * @apiParam (BodyParameters) {Number} [count.sold]  the plants sold count
 * @apiParam (BodyParameters) {Number} [count.available]  the plants available count
 * @apiParam (BodyParameters) {String} [image] plant image
 * @apiParam (BodyParameters) {String="vegetable", "fruit" , "herb" , "flower" ,"house plant"} [type] plant type
 * @apiParam (BodyParameters) {String{3..30}} [name] plant name
 * @apiParam (BodyParameters) {Number} [price] plant price
 * @apiParam (BodyParameters) {String} [info] plant information
 * @apiParam (BodyParameters) {String[]} [tips] tips about planting the plants
 * 
 * 
 * @apiSuccess {Object} count plant count
 * @apiSuccess {Number} count.sold  the plants sold count
 * @apiSuccess {Number} count.available  the plants available count
 * @apiSuccess {String} image plant image
 * @apiSuccess {String} _id plant id
 * @apiSuccess {String} type plant type
 * @apiSuccess {String} name plant name
 * @apiSuccess {Number} price plant price
 * @apiSuccess {String} info plant information
 * @apiSuccess {String[]} tips tips about planting the plants
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     
 *         {
 *              "count": {
 *              "sold": 0,
 *              "available": 6
 *              },
 *              "image": "Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg",
 *              "_id": "608fe99514f3af4878571a6a",
 *              "name": "bleeding heart",
 *              "type": "flower",
 *              "price": 600,
 *              "info": "The old-fashioned bleeding heart is a favorite perennial of the shady flower garden and was called the finest hardy plant of the 19th century."
 *              "tips": [
 *                  "Plant in the spring after the threat of frost has passed.",
 *                  "Plant in the shade.",
 *                  "Add compost to the soil before planting.",
 *                  "Soak the soil around the plant until moist.",
 *                  "Add mulch to keep moisture in and weeds out."
 *              ]
 *          }
 *
 * 
 */

/**
 * @api {post} api/plant Create Plant
 * @apiName Create Plant
 * @apiGroup Plant
 * @apiVersion 1.1.0
 * @apiPermission Admin
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request POST 'http://localhost:3000/api/plant' \
 * --data-raw '{
 *  "image":"Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg",
 *  "name":"SUNFLOWERS",
 *  "type":"flower",
 *  "price":800,
 *  "count":{
 *     "available":4
 *  },
 *  "info":"The sunflower (Helianthus annuus) is an annual plant with a large daisy-like flower face. Its scientific name comes from the Greek words helios (“sun”) and anthos (“flower”). The flowers come in many colors (yellow, red, orange, maroon, brown), but they are commonly bright yellow with brown centers that ripen into heavy heads filled with seeds. ",
 *  "tips":["Find a sunny spot! Sunflowers grow best in locations with direct sunlight (6 to 8 hours per day); they require long, hot summers to flower well.",
 *          "Choose a location with well-draining soil. It shouldn’t pool water after it rains.",
 *          "Sunflowers aren’t picky but the soil can’t be too compact. They have long tap roots that need to stretch out; in preparing a bed, dig down 2 feet in depth and about 3 feet across."
 *          ]
 * }'
 *  
 * @apiHeader {String} Authorization token
 * 
 * @apiParam (BodyParameters) {Object} [count] plant count
 * @apiParam (BodyParameters) {Number} count.available  the plants available count
 * @apiParam (BodyParameters) {String} image plant image
 * @apiParam (BodyParameters) {String="vegetable", "fruit" , "herb" , "flower" ,"house plant"} type plant type
 * @apiParam (BodyParameters) {String{3..30}} name plant name
 * @apiParam (BodyParameters) {Number} price plant price
 * @apiParam (BodyParameters) {String} info plant information
 * @apiParam (BodyParameters) {String[]} [tips] tips about planting the plants
 * 
 * 
 * @apiSuccess {String} _id created plant id
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     
 *         {
 *              "_id": "608fe99514f3af4878571a6a"
 *          }
 */

/**
 * @api {delete} api/plant delete Plant
 * @apiName Delete Plant
 * @apiGroup Plant
 * @apiVersion 1.1.0
 * @apiPermission Admin
 * 
 * @apiExample {curl} Example usage:
 *          curl --location --request DELETE 'http://localhost:3000/api/plant/6090040a8410d235d0097a20' \
 *  
 * @apiHeader {String} Authorization token
 * 
 * 
 * @apiSuccess {String} _id id of deleted plant 
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     
 *         {
 *              "_id": "608fe99514f3af4878571a6a"
 *          }
 *
 * 
 */

/**
 * @api {put} api/plant/type add Type
 * @apiName Add Type
 * @apiGroup Plant
 * @apiVersion 1.1.0
 * @apiPermission User
 * 
 * @apiExample {curl} Example usage:
 *          curl --location --request PUT 'http://localhost:3000/api/plant/type/tree' \
 *  
 * @apiHeader {String} Authorization token
 * 
 * @apiParam (PathParameters) {String} type new type to add
 * 
 * @apiSuccess {String[]} types all the available types
 *
 * @apiSuccessExample {String[]} Success-Response:
 *     HTTP/1.1 200 OK
 *     
 *         ["vegetable","fruit","herb","flower","house plant","tree"]
 *
 * 
 */

/**
 * @api {delete} api/plant/type delete Type
 * @apiName Delete Type
 * @apiGroup Plant
 * @apiVersion 1.1.0
 * @apiPermission User
 * 
 * @apiExample {curl} Example usage:
 *          curl --location --request DELETE 'http://localhost:3000/api/plant/type/tree' \
 *  
 * @apiHeader {String} Authorization token
 * @apiParam (PathParameters) {String} type type to be deleted
 * 
 * @apiSuccess {String[]} types all the available types
 *
 * @apiSuccessExample {String[]} Success-Response:
 *     HTTP/1.1 200 OK
 *     
 *         ["vegetable","fruit","herb","flower","house plant"]
 *
 * 
 */

