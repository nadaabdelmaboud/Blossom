const router = require("express").Router();
const PlantController = require("../controllers/plant.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const AdminMiddleware = require("../middlewares/admin.middleware");

router.get("/plant/", PlantController.getAllPlants);
router.get("/plant/:id", PlantController.getPlant);
router.put("/plant/:id", AuthMiddleware,AdminMiddleware, PlantController.updatePlant);
router.post("/plant/", AuthMiddleware,AdminMiddleware, PlantController.createPlant);
router.delete("/plant/:id", AuthMiddleware,AdminMiddleware,PlantController.deletePlant);
router.put("/plant/type/:type",AuthMiddleware,PlantController.addPlantType);
router.delete("/plant/type/:type", AuthMiddleware, PlantController.deletePlantType);

module.exports = router;