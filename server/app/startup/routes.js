const cors = require('cors')
const bodyParser=require('body-parser')
const winston = require('winston')
winston.add(new winston.transports.File({ filename: 'logfile.log' }));
module.exports=function(app){


    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // 404 handler
    app.use("*", (req, res, next) => {
        next("API_NOT_FOUND", 404);
    });

    //error handler
    app.use((err, req, res, next) => {
        winston.error(err.message,err);
        if (!err.status) {
        process.exit(0);
        }
        res.status(err.status).json({ message: err.message, status: err.status });
    });
}