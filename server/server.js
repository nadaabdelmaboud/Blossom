require('express-async-errors')
const express = require('express')
const logger = require('npmlog')
const app = express();
const port = process.env.PORT||3000;
require('./app/startup/config')
require('./app/startup/logging')
require('./app/startup/routes')(app)
require('./app/db/db.connection')

app.listen(port,()=>{
    logger.info(`Server is listening at port ${port}`);
})