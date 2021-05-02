function authAdmin(req, res, next) {
 
    if(req.user.type!='admin'){
        return res.status(401).send("Not Authorized")
    }
    next();
 
}
module.exports = authAdmin ;
