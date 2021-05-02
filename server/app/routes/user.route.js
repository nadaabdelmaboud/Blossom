const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const AuthMiddleware = require('../middlewares/auth.middleware') 
const AdminMiddleware = require('../middlewares/admin.middleware') 

router.get("/users/",AuthMiddleware,AdminMiddleware, UserController.getAllUsers);
router.get("/users/:id",AuthMiddleware, UserController.getUser);
router.put("/users/:id",AuthMiddleware, UserController.updateUser);
router.delete("/users/:id",AuthMiddleware, UserController.deleteUser);
module.exports = router;