const mongoose = require('mongoose');
const logger = require('npmlog')
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Successfully connected to the database");
  })
  .catch((err) => {
    logger.error("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
