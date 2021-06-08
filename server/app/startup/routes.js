const cors = require("cors");
const bodyParser = require("body-parser");
const AuthRoutes = require("../routes/auth.route");
const UserRoutes = require("../routes/user.route");
const ImageRoutes = require("../routes/image.route");
const PlantRoutes = require("../routes/plant.route");
const BouquetRoutes = require("../routes/bouquet.route");
const OrderRoutes = require("../routes/order.route");
const CartRoutes  = require("../routes/cart.route");
const ShopRoutes  = require("../routes/shop.route");
const FeedBackRoutes = require("../routes/feedback.route");
const serveStatic = require('serve-static')
const path = require('path')
module.exports = function (app, winston) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  // app.use('/', serveStatic(path.join(__dirname, '../dist')))


  app.use("/api", ShopRoutes);
  app.use("/api", AuthRoutes);
  app.use("/api", UserRoutes);
  app.use("/api", ImageRoutes);
  app.use("/api", PlantRoutes);
  app.use("/api", BouquetRoutes);
  app.use("/api", OrderRoutes);
  app.use("/api", CartRoutes);
  app.use("/api", FeedBackRoutes);

  // // this * route is to serve project on different page routes except root `/`
  // app.get(/.*/, function (req, res) {
  //   res.sendFile(path.join(__dirname, '../dist/index.html'))
  // })



  // 404 handler
  app.use("*", (req, res, next) => {
    error = new Error("API_NOT_FOUND");
    error.status = 404;
    next(error);
  });

  //error handler
  app.use((err, req, res, next) => {
    
    winston.error(err.message, err);
    if (!err.status) {
      process.exit(0);
    }
    res.status(err.status).json({ message: err.message, status: err.status });
  });

  
    
};
