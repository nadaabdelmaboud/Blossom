const express = require('express')
const cors = require('cors')
const bodyParser=require('body-parser')
const logger = require('npmlog')
require('dotenv').config()
require('./app/db/db.connection')
const app = express();
const port = process.env.PORT||3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// 404 handler
app.use("*", (req, res, next) => {
    next("API_NOT_FOUND", 404);
});
  
// error handler
app.use((err, req, res, next) => {
    logger.error("Error Message >", err);
    if (!err.status) {
      logger.error("Stack >", err);
      process.exit(0);
    }
    res.status(err.status).json({ message: err.message, status: err.status });
  });

app.listen(port,()=>{
    logger.info(`Server is listening at port ${port}`);
})