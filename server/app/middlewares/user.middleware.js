const jwt = require("jsonwebtoken");
function authUser(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("No Available token");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    if(req.user.type!='user'){
        throw new Error;
    }
    next();
  } catch (ex) {
    return res.status(400).send("Invalid Token");
  }
}
module.exports = authUser ;
