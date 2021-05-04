// Auth
/**
 * @api {post} api/login Login
 * @apiName Login to Blossom
 * @apiGroup Auth
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * @apiParam (BodyParameters) {String}  email Required.
 * @apiParam (BodyParameters) {String}  password Required.
 * 
 *@apiExample {curl} Example usage
 * curl --location --request POST 'http://localhost:3000/api/login' \
--data-raw '{
	"email":"nada@gmail.com",
	"password":"hello"
'}'/
 * 
 * @apiSuccessExample {json} Success-Response:  
 * HTTP/1.1 200 OK
 *{
*    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc1YzY4Mzg3YmNlYjEwYWMzZDMzOTQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg1NjYzMzQ2LCJleHAiOjE1ODU3NDk3NDZ9.hLom36hxkDhABZEquFdKtFGEdmdxUziQx9eWVVry_3s"
*}
 *
 *
 */

/**
 * @api {post} api/sign Signup
 * @apiName Signup to Blossom
 * @apiGroup Auth
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * @apiParam (BodyParameters) {String} name Required.
 * @apiParam (BodyParameters) {String} password Required.
 * @apiParam (BodyParameters) {String} repeat_password Required.
 * @apiParam (BodyParameters) {String} email Required.
 * @apiParam (BodyParameters) {String} address[country] Required country
 * @apiParam (BodyParameters) {String} address[city]    Required city.
 * @apiParam (BodyParameters) {String} address[street]   Required street.
 * @apiParam (BodyParameters) {Number} address[buildingNo]    Required building number.
 * @apiParam (BodyParameters) {Number} address[apartmentNo]   Required apartment number.
 * @apiParam (BodyParameters) {Number} phone Required.
 * 
 *@apiExample {curl} Example usage
 * curl --location --request POST 'http://localhost:3000/api/sign' \
--data-raw '{
    "name":"Nada",
    "password":"hello",
    "repeat_password":"hello",
    "email":"nada@gmail.com",
    "address":{
        "country":"egypt",
        "city":"giza",
        "street":"abdelzaher",
        "buildingNo":20,
        "apartmentNo":5
    },
    "phone":"01283176585"
'}'/
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
*    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc1YzY4Mzg3YmNlYjEwYWMzZDMzOTQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg1NjYzMzQ2LCJleHAiOjE1ODU3NDk3NDZ9.hLom36hxkDhABZEquFdKtFGEdmdxUziQx9eWVVry_3s"
*  }
 *
 *
 */

// Bouquet
/**
 * @api {post} api/bouquets Create Bouquet
 * @apiName Create Bouquet
 * @apiGroup Bouquets
 * @apiPermission admin
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * @apiHeader {String} Authorization token
 * 
 * @apiParam (BodyParameters) {String} name Required. Name of the bouquet
 * @apiParam (BodyParameters) {String} image Required. The key that is returned from the upload Image request
 * @apiParam (BodyParameters) {String="BabyOrchid","Cabbage","Chrysanthemums","Eucalyptus","Gerbera","Roses","Lilies","Spider","Tulips"} bouquetCategory Required.
 * @apiParam (BodyParameters) {String="I Love You","I Miss You","Congratulations","Get Well Soon","Happy Anniversary","Happy Birthday","I Am Sorry","Thank You","Wedding"} bouquetSentiment Required.
 * @apiParam (BodyParameters) {String} info             Required info about the bouquet.
 * @apiParam (BodyParameters) {Number} count   Required available count of the bouquet.
 * @apiParam (BodyParameters) {Number} price Required price of the bouquet.
 * 
 *@apiExample {curl} Example usage
 * curl --location --request POST 'http://localhost:3000/api/bouquets' \
--data-raw '{
    "name":"Tuli",
    "image":"Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg",
    "bouquetCategory":"Tulips",
    "bouquetSentiment":"I Love You",
    "price":100,
    "count":10,
    "info":"Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity."
'}'/
 * 
 * @apiSuccessExample {boolean} Success-Response:
 * HTTP/1.1 200 OK
 * true
 *
 *
 */

/**
 * @api {get} api/bouquets Get All Bouquets
 * @apiName Get All Bouquets
 * @apiGroup Bouquets
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 *@apiParam (QueryParameters) {Number} pageSize required the number of bouquets required in one page
 *@apiParam (QueryParameters) {Number} pageNumber required the required page number  
 *@apiParam (QueryParameters) {String="BabyOrchid","Cabbage","Chrysanthemums","Eucalyptus","Gerbera","Roses","Lilies","Spider","Tulips"} [category]  the category of the required bouquets
 *@apiParam (QueryParameters) {String="I Love You","I Miss You","Congratulations","Get Well Soon","Happy Anniversary","Happy Birthday","I Am Sorry","Thank You","Wedding"} [sentiment]  the sentiment of the required bouquets
 * @apiExample {curl} Example usage
 * curl --location --request GET 'http://localhost:3000/api/bouquets?category=&sentiment=I Love you&pageSize=2&pageNumber=1' \/
 * 
 * @apiSuccessExample {Array[objects]} Success-Response:
 * HTTP/1.1 200 OK
[
    {
        "count": {
            "sold": 0,
            "available": 5
        },
        "_id": "6090ae8be91a4e1150085d41",
        "name": "Tulip",
        "price": 100,
        "info": "Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity.",
        "bouquetCategory": "Tulips",
        "bouquetSentiment": "I Love You",
        "images": "Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg",
        "__v": 0
    }
]
 *
 *
 */

/**
 * @api {get} api/bouquets/:id Get Bouquet By Id
 * @apiName Get Bouquet By Id
 * @apiGroup Bouquets
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * @apiParam (PathParameters) {String} id Required. Id of the bouquet
 * 
 *@apiExample {curl} Example usage
 * curl --location --request GET 'http://localhost:3000/api/bouquets/6090ae8be91a4e1150085d41' \
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "count": {
        "sold": 0,
        "available": 10
    },
    "_id": "6090ae8be91a4e1150085d41",
    "name": "Tuli",
    "price": 100,
    "info": "Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity.",
    "bouquetCategory": "Tulips",
    "bouquetSentiment": "I Love You",
    "images": "Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg",
    "__v": 0
}
 *
 *
 */

/**
 * @api {delete} api/bouquets/:id Delete Bouquet
 * @apiName Delete Bouquet
 * @apiGroup Bouquets
 * @apiPermission admin
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * @apiHeader {String} Authorization token
 * @apiParam (PathParameters) {String} id Required. Id of the bouquet
 * 
 *@apiExample {curl} Example usage
 * curl --location --request DELETE 'http://localhost:3000/api/bouquets/6090ae8be91a4e1150085d41' \
 * 
 * @apiSuccessExample {Boolean} Success-Response:
 * HTTP/1.1 200 OK
 * true
 *
 *
 */

/**
 * @api {put} api/bouquets/:id Update Bouquet
 * @apiName Update Bouquet
 * @apiGroup Bouquets
 * @apiPermission admin
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * @apiHeader {String} Authorization token
 * @apiParam (PathParameters) {String} id Required. Id of the bouquet
 * @apiParam (BodyParameters) {String} [name] Name of the bouquet
 * @apiParam (BodyParameters) {String} [image] The key that is returned from the upload Image request
 * @apiParam (BodyParameters) {String="BabyOrchid","Cabbage","Chrysanthemums","Eucalyptus","Gerbera","Roses","Lilies","Spider","Tulips"} [bouquetCategory]
 * @apiParam (BodyParameters) {String="I Love You","I Miss You","Congratulations","Get Well Soon","Happy Anniversary","Happy Birthday","I Am Sorry","Thank You","Wedding"} [bouquetSentiment]
 * @apiParam (BodyParameters) {String} [info]     info about the bouquet.
 * @apiParam (BodyParameters) {Number} [count]    available count of the bouquet.
 * @apiParam (BodyParameters) {Number} [price]    price of the bouquet.
 * @apiExample {curl} Example usage
 * curl --location --request PUT 'http://localhost:3000/api/bouquets/6090ae8be91a4e1150085d41' \
 * --data-raw '{
    "name":"TuliP",
    "count":5,
'}'/
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
    "_id": "6090ae8be91a4e1150085d41",
    "name": "Tulip",
    "price": 100,
    "count": {
        "sold": 0,
        "available": 5
    },
    "info": "Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity.",
    "bouquetCategory": "Tulips",
    "bouquetSentiment": "I Love You",
    "images": "Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg",
    "__v": 0
}
 *
 *
 */

//Image
/**
 * @api {get} api/upload Upload Image
 * @apiName Upload Image
 * @apiGroup Images
 * @apiPermission admin
 * @apiVersion  1.1.0
@apiDescription
 * 
 * <p style="color:red">Get Presigned Url Of an Image</p> </br></br>
 * 
 * <h1>Request Parameters</h1></br></br>
 * <h1>Endpoint</h1> 
 * @apiHeader {String} Authorization token
 * @apiParam (BodyParameters) {String} ContentType Required. Type of the img jpg,png,jpeg,...
 * @apiParam (BodyParameters) {String="Bouquet","Plant"} Type Required. Type of the category of the image 
 * @apiExample {curl} Example usage
 * curl --location --request GET 'http://localhost:3000/api/upload' \
 * --data-raw '{
    "ContentType":"jpg",
    "Type":"Bouquet",
'}'/
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
    "key": "Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg",
    "url": "https://blossom-bucket.s3.amazonaws.com/Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg?AWSAccessKeyId=AKIAWP5OWQE4EZK3NJG5&Content-Type=image%2Fjpg&Expires=1620011171&Signature=2f9InXJfKmGvodBsUcAOzX0C7qs%3D"
}
 *
 *
 */