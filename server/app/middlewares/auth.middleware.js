const jwt = require('jsonwebtoken')
function auth(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("No Available token");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).send("Invalid Token");
  }
}
module.exports = auth ;
