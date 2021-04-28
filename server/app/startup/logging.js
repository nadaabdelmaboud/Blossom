
module.exports=function(winston){
process.on('uncaughtException',(ex)=>{
    console.log(ex);
    winston.error(ex.message,ex);
    process.exit(1);
})
process.on('unhandledRejection',(ex)=>{
    console.log("2");
    winston.error(ex.message,ex);
    process.exit(1);
})
}