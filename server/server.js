require('express-async-errors')
require('dotenv').config()
const express = require('express')
const logger = require('npmlog')
const app = express();
const port = process.env.PORT||3000;
const winston = require('winston')
winston.add(new winston.transports.File({ filename: 'logfile.log' }))
require('./app/startup/logging')(winston)
require('./app/startup/routes')(app,winston)
require('./app/db/db.connection')(winston)

app.listen(port,()=>{
    winston.info(`Server is listening at port ${port}`);
    logger.info(`Server is listening at port ${port}`);
})