const router = require("express").Router();
const PlantController = require("../controllers/plant.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const AdminMiddleware = require("../middlewares/admin.middleware");

router.get("/plant/", PlantController.getAllPlants);
router.get("/plant/:id", PlantController.getPlant);
router.put("/plant/:id", AuthMiddleware,AdminMiddleware, PlantController.updatePlant);
router.post("/plant/", AuthMiddleware,AdminMiddleware, PlantController.createPlant);
router.delete("/plant/:id", AuthMiddleware,AdminMiddleware,PlantController.deletePlant);

module.exports = router;