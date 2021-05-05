const router = require('express').Router();
const AdminMiddleware = require('../middlewares/admin.middleware')
const AuthMiddleware = require('../middlewares/auth.middleware')
const BouquetController = require('../controllers/bouquet.controller')
router.get('/bouquets',BouquetController.getBouquets)
router.get('/bouquets/:id',BouquetController.getBouquetById)
router.post('/bouquets',AuthMiddleware,AdminMiddleware,BouquetController.createBouquet)
router.put('/bouquets/:id',AuthMiddleware,AdminMiddleware,BouquetController.updateBouquet)
router.delete('/bouquets/:id',AuthMiddleware,AdminMiddleware,BouquetController.deleteBouquet)


module.exports=router;