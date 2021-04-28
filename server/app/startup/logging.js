const winston = require('winston')
winston.add(new winston.transports.File({ filename: 'logfile.log' }));
process.on('uncaughtException',(ex)=>{
    winston.error(ex.message,ex);
    process.exit(1);
})
process.on('unhandledRejection',(ex)=>{
    winston.error(ex.message,ex);
    process.exit(1);
})