const router = require('express').Router();
const AdminMiddleware = require('../middlewares/admin.middleware')
const AuthMiddleware = require('../middlewares/auth.middleware')
const ImageController = require('../controllers/image.controller')

router.get('/upload',AuthMiddleware,AdminMiddleware,ImageController.upload)


module.exports=router;