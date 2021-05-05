const mongoose = require('mongoose');
const logger = require('npmlog')
mongoose.Promise = global.Promise;
module.exports=function(winston){
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
  })
  .then(() => {
    winston.info("Successfully connected to the database");
    logger.info("Successfully connected to the database");
  })
  .catch((err) => {
    winston.error("Could not connect to the database. Exiting now...", err);
    logger.error("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
}