const router = require('express').Router();
const UserController = require('../controllers/user.controller');
router.get("/users/", UserController.getAllUsers);
router.get("/users/:id", UserController.getUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);
module.exports = router;