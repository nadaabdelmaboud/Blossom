const Admin = require('../db/queries/admin.queries') 
const jwt = require("jsonwebtoken");
async function authAdmin(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("No Available token");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.admin = decoded;
    const admin = await Admin.findAdminById(req.admin._id);
    if(!admin){
        throw new Error;
    }
    next();
  } catch (ex) {
    return res.status(400).send("Invalid Token");
  }
}
module.exports = authAdmin ;
