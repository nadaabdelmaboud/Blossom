const router = require('express').Router();
const AuthController = require('../controllers/auth.controller')
router.post('/login',AuthController.login);
router.post('/sign',AuthController.signUp);
module.exports=router;