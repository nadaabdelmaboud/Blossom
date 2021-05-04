define({ "api": [
  {
    "type": "post",
    "url": "api/login",
    "title": "Login",
    "name": "Login_to_Blossom",
    "group": "Auth",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Required.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/login' \\\n--data-raw '{\n\t\"email\":\"nada@gmail.com\",\n\t\"password\":\"hello\"\n'}'/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc1YzY4Mzg3YmNlYjEwYWMzZDMzOTQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg1NjYzMzQ2LCJleHAiOjE1ODU3NDk3NDZ9.hLom36hxkDhABZEquFdKtFGEdmdxUziQx9eWVVry_3s\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/sign",
    "title": "Signup",
    "name": "Signup_to_Blossom",
    "group": "Auth",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "repeat_password",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "address[country]",
            "description": "<p>Required country</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "address[city]",
            "description": "<p>Required city.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "address[street]",
            "description": "<p>Required street.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "address[buildingNo]",
            "description": "<p>Required building number.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "address[apartmentNo]",
            "description": "<p>Required apartment number.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>Required.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/sign' \\\n--data-raw '{\n    \"name\":\"Nada\",\n    \"password\":\"hello\",\n    \"repeat_password\":\"hello\",\n    \"email\":\"nada@gmail.com\",\n    \"address\":{\n        \"country\":\"egypt\",\n        \"city\":\"giza\",\n        \"street\":\"abdelzaher\",\n        \"buildingNo\":20,\n        \"apartmentNo\":5\n    },\n    \"phone\":\"01283176585\"\n'}'/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc1YzY4Mzg3YmNlYjEwYWMzZDMzOTQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg1NjYzMzQ2LCJleHAiOjE1ODU3NDk3NDZ9.hLom36hxkDhABZEquFdKtFGEdmdxUziQx9eWVVry_3s\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/bouquets",
    "title": "Create Bouquet",
    "name": "Create_Bouquet",
    "group": "Bouquets",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Required. Name of the bouquet</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Required. The key that is returned from the upload Image request</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"BabyOrchid\"",
              "\"Cabbage\"",
              "\"Chrysanthemums\"",
              "\"Eucalyptus\"",
              "\"Gerbera\"",
              "\"Roses\"",
              "\"Lilies\"",
              "\"Spider\"",
              "\"Tulips\""
            ],
            "optional": false,
            "field": "bouquetCategory",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"I Love You\"",
              "\"I Miss You\"",
              "\"Congratulations\"",
              "\"Get Well Soon\"",
              "\"Happy Anniversary\"",
              "\"Happy Birthday\"",
              "\"I Am Sorry\"",
              "\"Thank You\"",
              "\"Wedding\""
            ],
            "optional": false,
            "field": "bouquetSentiment",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>Required info about the bouquet.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Required available count of the bouquet.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Required price of the bouquet.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/bouquets' \\\n--data-raw '{\n    \"name\":\"Tuli\",\n    \"image\":\"Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg\",\n    \"bouquetCategory\":\"Tulips\",\n    \"bouquetSentiment\":\"I Love You\",\n    \"price\":100,\n    \"count\":10,\n    \"info\":\"Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity.\"\n'}'/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "boolean"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "delete",
    "url": "api/bouquets/:id",
    "title": "Delete Bouquet",
    "name": "Delete_Bouquet",
    "group": "Bouquets",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Required. Id of the bouquet</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/bouquets/6090ae8be91a4e1150085d41' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "Boolean"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "get",
    "url": "api/bouquets",
    "title": "Get All Bouquets",
    "name": "Get_All_Bouquets",
    "group": "Bouquets",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>required the number of bouquets required in one page</p>"
          },
          {
            "group": "QueryParameters",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>required the required page number</p>"
          },
          {
            "group": "QueryParameters",
            "type": "String",
            "allowedValues": [
              "\"BabyOrchid\"",
              "\"Cabbage\"",
              "\"Chrysanthemums\"",
              "\"Eucalyptus\"",
              "\"Gerbera\"",
              "\"Roses\"",
              "\"Lilies\"",
              "\"Spider\"",
              "\"Tulips\""
            ],
            "optional": true,
            "field": "category",
            "description": "<p>the category of the required bouquets</p>"
          },
          {
            "group": "QueryParameters",
            "type": "String",
            "allowedValues": [
              "\"I Love You\"",
              "\"I Miss You\"",
              "\"Congratulations\"",
              "\"Get Well Soon\"",
              "\"Happy Anniversary\"",
              "\"Happy Birthday\"",
              "\"I Am Sorry\"",
              "\"Thank You\"",
              "\"Wedding\""
            ],
            "optional": true,
            "field": "sentiment",
            "description": "<p>the sentiment of the required bouquets</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/bouquets?category=&sentiment=I Love you&pageSize=2&pageNumber=1' \\/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"count\": {\n            \"sold\": 0,\n            \"available\": 5\n        },\n        \"_id\": \"6090ae8be91a4e1150085d41\",\n        \"name\": \"Tulip\",\n        \"price\": 100,\n        \"info\": \"Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity.\",\n        \"bouquetCategory\": \"Tulips\",\n        \"bouquetSentiment\": \"I Love You\",\n        \"images\": \"Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg\",\n        \"__v\": 0\n    }\n]",
          "type": "Array[objects]"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "get",
    "url": "api/bouquets/:id",
    "title": "Get Bouquet By Id",
    "name": "Get_Bouquet_By_Id",
    "group": "Bouquets",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Required. Id of the bouquet</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/bouquets/6090ae8be91a4e1150085d41' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"count\": {\n        \"sold\": 0,\n        \"available\": 10\n    },\n    \"_id\": \"6090ae8be91a4e1150085d41\",\n    \"name\": \"Tuli\",\n    \"price\": 100,\n    \"info\": \"Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity.\",\n    \"bouquetCategory\": \"Tulips\",\n    \"bouquetSentiment\": \"I Love You\",\n    \"images\": \"Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "put",
    "url": "api/bouquets/:id",
    "title": "Update Bouquet",
    "name": "Update_Bouquet",
    "group": "Bouquets",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Required. Id of the bouquet</p>"
          }
        ],
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the bouquet</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "image",
            "description": "<p>The key that is returned from the upload Image request</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"BabyOrchid\"",
              "\"Cabbage\"",
              "\"Chrysanthemums\"",
              "\"Eucalyptus\"",
              "\"Gerbera\"",
              "\"Roses\"",
              "\"Lilies\"",
              "\"Spider\"",
              "\"Tulips\""
            ],
            "optional": true,
            "field": "bouquetCategory",
            "description": ""
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"I Love You\"",
              "\"I Miss You\"",
              "\"Congratulations\"",
              "\"Get Well Soon\"",
              "\"Happy Anniversary\"",
              "\"Happy Birthday\"",
              "\"I Am Sorry\"",
              "\"Thank You\"",
              "\"Wedding\""
            ],
            "optional": true,
            "field": "bouquetSentiment",
            "description": ""
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "info",
            "description": "<p>info about the bouquet.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>available count of the bouquet.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "price",
            "description": "<p>price of the bouquet.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request PUT 'http://localhost:3000/api/bouquets/6090ae8be91a4e1150085d41' \\\n--data-raw '{\n    \"name\":\"TuliP\",\n    \"count\":5,\n'}'/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"6090ae8be91a4e1150085d41\",\n    \"name\": \"Tulip\",\n    \"price\": 100,\n    \"count\": {\n        \"sold\": 0,\n        \"available\": 5\n    },\n    \"info\": \"Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity.\",\n    \"bouquetCategory\": \"Tulips\",\n    \"bouquetSentiment\": \"I Love You\",\n    \"images\": \"Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "get",
    "url": "api/upload",
    "title": "Upload Image",
    "name": "Upload_Image",
    "group": "Images",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.1.0",
    "description": "<p style=\"color:red\">Get Presigned Url Of an Image</p> </br></br> <h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "description": "<p>Required. Type of the img jpg,png,jpeg,...</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"Bouquet\"",
              "\"Plant\""
            ],
            "optional": false,
            "field": "Type",
            "description": "<p>Required. Type of the category of the image</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/upload' \\\n--data-raw '{\n    \"ContentType\":\"jpg\",\n    \"Type\":\"Bouquet\",\n'}'/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"key\": \"Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg\",\n    \"url\": \"https://blossom-bucket.s3.amazonaws.com/Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg?AWSAccessKeyId=AKIAWP5OWQE4EZK3NJG5&Content-Type=image%2Fjpg&Expires=1620011171&Signature=2f9InXJfKmGvodBsUcAOzX0C7qs%3D\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Images"
  },
  {
    "type": "post",
    "url": "api/plant",
    "title": "Create Plant",
    "name": "Create_Plant",
    "group": "Plant",
    "version": "1.1.0",
    "permission": [
      {
        "name": "</br><h1>admin</h1></br>"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "         curl --location --request POST 'http://localhost:3000/api/plant' \\\n--data-raw '{\n \"images\":[\n    \n ],\n \"name\":\"SUNFLOWERS\",\n \"type\":\"flower\",\n \"price\":800,\n \"count\":{\n    \"available\":4\n },\n \"info\":\"The sunflower (Helianthus annuus) is an annual plant with a large daisy-like flower face. Its scientific name comes from the Greek words helios (“sun”) and anthos (“flower”). The flowers come in many colors (yellow, red, orange, maroon, brown), but they are commonly bright yellow with brown centers that ripen into heavy heads filled with seeds. \",\n \"tips\":\"1-Find a sunny spot! Sunflowers grow best in locations with direct sunlight (6 to 8 hours per day); they require long, hot summers to flower well.2-Choose a location with well-draining soil. It shouldn’t pool water after it rains.3-Sunflowers aren’t picky but the soil can’t be too compact. They have long tap roots that need to stretch out; in preparing a bed, dig down 2 feet in depth and about 3 feet across.\"\n}'",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "Object",
            "optional": true,
            "field": "count",
            "description": "<p>plant count</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "count.available",
            "description": "<p>the plants available count</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Object[]",
            "optional": false,
            "field": "images",
            "description": "<p>array of plant images</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"vegetable\"",
              "\"fruit\"",
              "\"herb\"",
              "\"flower\"",
              "\"house plant\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>plant type</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "size": "3..30",
            "optional": false,
            "field": "name",
            "description": "<p>plant name</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>plant price</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>plant information</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "tips",
            "description": "<p>tips about planting the plants</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>created plant id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n         \"_id\": \"608fe99514f3af4878571a6a\"\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "delete",
    "url": "api/plant",
    "title": "delete Plant",
    "name": "Delete_Plant",
    "group": "Plant",
    "version": "1.1.0",
    "permission": [
      {
        "name": "</br><h1>admin</h1></br>"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/plant/6090040a8410d235d0097a20' \\",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of delted plant</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n         \"_id\": \"608fe99514f3af4878571a6a\"\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "get",
    "url": "api/plant",
    "title": "Get All Plants",
    "name": "Get_All_Plants",
    "group": "Plant",
    "version": "1.1.0",
    "description": "<p>this request retruns all the plant in the database and doesn't return the plants tips.</p>",
    "permission": [
      {
        "name": "</br><h1>user</h1></br>"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/plant?pageNumber=1&pageSize=10' \\",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "type": "Number",
            "optional": true,
            "field": "pageNumber",
            "defaultValue": "1",
            "description": "<p>page number</p>"
          },
          {
            "group": "QueryParameters",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "10",
            "description": "<p>max number of plants displayed in the page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "count",
            "description": "<p>plant count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.sold",
            "description": "<p>the plants sold count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.available",
            "description": "<p>the plants available count</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "images",
            "description": "<p>array of plant images</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>plant id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>plant type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>plant name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>plant price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>plant information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"count\": {\n         \"sold\": 0,\n         \"available\": 4\n         },\n         \"images\": [],\n         \"_id\": \"608fe3662947f108c0fcdb0c\",\n         \"name\": \"lavender\",\n         \"type\": \"herb\",\n         \"price\": 300,\n         \"info\": \"Lavender is a bushy, strong-scented perennial plant from the Mediterranean. In warmer regions, its gray to green foliage stays evergreen throughout the year, and the herb thrives in some of the toughest of garden condition. Here’s how to plant, grow, and harvest lavender in the garden.\"\n     },\n    {\n         \"count\": {\n         \"sold\": 0,\n         \"available\": 6\n         },\n         \"images\": [],\n         \"_id\": \"608fe99514f3af4878571a6a\",\n         \"name\": \"bleeding heart\",\n         \"type\": \"flower\",\n         \"price\": 600,\n         \"info\": \"The old-fashioned bleeding heart is a favorite perennial of the shady flower garden and was called the finest hardy plant of the 19th century.\"\n     }\n\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "get",
    "url": "api/plant/:id",
    "title": "Get Plant By Id",
    "name": "Get_Plant_By_Id",
    "group": "Plant",
    "version": "1.1.0",
    "description": "<p>this request retruns all the plant info.</p>",
    "permission": [
      {
        "name": "</br><h1>user</h1></br>"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/plant/6090043a8410d235d0097a21' \\",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>plant id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "count",
            "description": "<p>plant count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.sold",
            "description": "<p>the plants sold count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.available",
            "description": "<p>the plants available count</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "images",
            "description": "<p>array of plant images</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>plant id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>plant type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>plant name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>plant price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>plant information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tips",
            "description": "<p>tips about planting the plants</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n         \"count\": {\n         \"sold\": 0,\n         \"available\": 6\n         },\n         \"images\": [],\n         \"_id\": \"608fe99514f3af4878571a6a\",\n         \"name\": \"bleeding heart\",\n         \"type\": \"flower\",\n         \"price\": 600,\n         \"info\": \"The old-fashioned bleeding heart is a favorite perennial of the shady flower garden and was called the finest hardy plant of the 19th century.\"\n         \"tips\": \"1-Plant in the spring after the threat of frost has passed. (See local frost dates.)2-Plant in the shade.3-Add compost to the soil before planting.4-Soak the soil around the plant until moist.5-Add mulch to keep moisture in and weeds out.\"\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "put",
    "url": "api/plant/:id",
    "title": "Update Plant",
    "name": "Update_Plant",
    "group": "Plant",
    "version": "1.1.0",
    "permission": [
      {
        "name": "</br><h1>admin</h1></br>"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/plant/6090043a8410d235d0097a21' \\\n--data-raw '{\n            \"price\":500\n        }'",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>plant id</p>"
          }
        ],
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "Object",
            "optional": true,
            "field": "count",
            "description": "<p>plant count</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "count.sold",
            "description": "<p>the plants sold count</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "count.available",
            "description": "<p>the plants available count</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Object[]",
            "optional": true,
            "field": "images",
            "description": "<p>array of plant images</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"vegetable\"",
              "\"fruit\"",
              "\"herb\"",
              "\"flower\"",
              "\"house plant\""
            ],
            "optional": true,
            "field": "type",
            "description": "<p>plant type</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "size": "3..30",
            "optional": true,
            "field": "name",
            "description": "<p>plant name</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "price",
            "description": "<p>plant price</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "info",
            "description": "<p>plant information</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "tips",
            "description": "<p>tips about planting the plants</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "count",
            "description": "<p>plant count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.sold",
            "description": "<p>the plants sold count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.available",
            "description": "<p>the plants available count</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "images",
            "description": "<p>array of plant images</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>plant id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>plant type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>plant name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>plant price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>plant information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tips",
            "description": "<p>tips about planting the plants</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n         \"count\": {\n         \"sold\": 0,\n         \"available\": 6\n         },\n         \"images\": [],\n         \"_id\": \"608fe99514f3af4878571a6a\",\n         \"name\": \"bleeding heart\",\n         \"type\": \"flower\",\n         \"price\": 600,\n         \"info\": \"The old-fashioned bleeding heart is a favorite perennial of the shady flower garden and was called the finest hardy plant of the 19th century.\"\n         \"tips\": \"1-Plant in the spring after the threat of frost has passed. (See local frost dates.)2-Plant in the shade.3-Add compost to the soil before planting.4-Soak the soil around the plant until moist.5-Add mulch to keep moisture in and weeds out.\"\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  }
] });
