
const error=async function(message,status){
    let newError = new Error(message);
    newError.status=status;
    return newError;
}
module.exports=error;