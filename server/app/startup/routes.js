const cors = require('cors')
const bodyParser=require('body-parser')

module.exports=function(app,winston){


    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // 404 handler
    app.use("*", (req, res, next) => {
        error=new Error("API_NOT_FOUND");
        error.status=404;
        next(error);
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