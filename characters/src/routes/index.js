const { Router } = require('express');
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getCharacterID);
router.post("/", middlewares.chractersValidation, controllers.createCharacters);

module.exports = router;