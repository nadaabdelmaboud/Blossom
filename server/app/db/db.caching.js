const util = require('util')
const redis = require('redis');
const client = redis.createClient(REDIS_URI);
client.get=util.promisify(client.get);
module.exports=client