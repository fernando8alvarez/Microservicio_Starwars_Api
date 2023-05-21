const { Router } = require('express');
const controllers = require("../controllers");

const router = Router();

router.get("/", controllers.getPlanets);
router.get("/:id", controllers.getPlanetID);

module.exports = router;