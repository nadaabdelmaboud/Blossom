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
 * @apiParam (QueryParameters)  email Required.
 * @apiParam (QueryParameters)  password Required.
 * 
 *@apiExample {curl} Example usage
 * curl --location --request POST 'http://localhost:3000/api/login' \
--data-raw '{
	"email":"nada@gmail.com",
	"password":"hello"
'}'/
 * 
 * @apiSuccessExample {json} Success-Response:
 *{
*    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc1YzY4Mzg3YmNlYjEwYWMzZDMzOTQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg1NjYzMzQ2LCJleHAiOjE1ODU3NDk3NDZ9.hLom36hxkDhABZEquFdKtFGEdmdxUziQx9eWVVry_3s"
*}
 *
 *
 */
