const router = require('express').Router();
const AdminMiddleware = require('../middlewares/admin.middleware')
const ImageController = require('../controllers/image.controller')
router.get('/upload',AdminMiddleware,ImageController.upload)


module.exports=router;