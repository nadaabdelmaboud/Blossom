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
    "filename": "code/doc.js",
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
    "filename": "code/doc.js",
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
    "filename": "code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "delete",
    "url": "api/bouquets/:id",
    "title": "Delete Bouquet",
    "name": "Delete_Bouquet",
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
    "filename": "code/doc.js",
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
    "filename": "code/doc.js",
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
    "filename": "code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "put",
    "url": "api/bouquets/:id",
    "title": "Update Bouquet",
    "name": "Update_Bouquet",
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
    "filename": "code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "get",
    "url": "api/upload",
    "title": "Upload Image",
    "name": "Upload_Image",
    "group": "Images",
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
    "filename": "code/doc.js",
    "groupTitle": "Images"
  }
] });
