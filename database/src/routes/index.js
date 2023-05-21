const { Router } = require('express');
//store = { Character, Film, Planet }
const store = require("../database/index");
const { validateModel } = require("../middlewares/index");

const router = Router();

// //Ruta para obtener todas la peliculas
// router.get("/films", async (req, res) => {
//     const response = await Film.list();
//     res.status(200).json(response);
// })

//Ruta generica para obetener todos los personajes, peliculas o planetas
//validateModel: validra del la ruta /.model es la ruta correcta
router.get("/:model", validateModel, async (req, res) => {

    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
});

router.post("/:model", validateModel, async (req, res) => {
    const { model } = req.params;
    const body = req.body;
    const response = await store[model].insert(body);
    res.status(200).json(response);
});


module.exports = router;