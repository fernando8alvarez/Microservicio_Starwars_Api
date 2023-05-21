const { Router } = require('express');
const controllers = require("../controllers");

const router = Router();

router.get("/", controllers.getFilms);
router.get("/:id", controllers.getFilmID);

module.exports = router;