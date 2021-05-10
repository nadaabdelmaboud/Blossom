const router = require('express').Router();
const AdminMiddleware = require('../middlewares/admin.middleware')
const AuthMiddleware = require('../middlewares/auth.middleware')
const BouquetController = require('../controllers/bouquet.controller')
router.get('/bouquets',BouquetController.getBouquets)
router.get('/bouquets/:id',BouquetController.getBouquetById)
router.post('/bouquets',AuthMiddleware,AdminMiddleware,BouquetController.createBouquet)
router.put('/bouquets/:id',AuthMiddleware,AdminMiddleware,BouquetController.updateBouquet)
router.delete('/bouquets/:id',AuthMiddleware,AdminMiddleware,BouquetController.deleteBouquet)
router.get('/bouquets/categories',AuthMiddleware,AdminMiddleware,BouquetController.getCategories)
router.put('/bouquets/categories',AuthMiddleware,AdminMiddleware,BouquetController.updateCategory)
router.delete('/bouquets/categories',AuthMiddleware,AdminMiddleware,BouquetController.deleteCategory)
router.get('/bouquets/sentiments',AuthMiddleware,AdminMiddleware,BouquetController.getSentiments)
router.put('/bouquets/sentiments',AuthMiddleware,AdminMiddleware,BouquetController.updateSentiment)
router.delete('/bouquets/sentiments',AuthMiddleware,AdminMiddleware,BouquetController.deleteSentiment)
module.exports=router;