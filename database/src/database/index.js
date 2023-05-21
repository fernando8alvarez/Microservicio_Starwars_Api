const mongoose = require("mongoose");
const { MONGO_URL } = require("../config/envs");

//Coneccion con la base de datos
const conn = mongoose.createConnection(MONGO_URL);

//Modelo de personajes conectado a la BD
// const Character = conn.model("Character", require("./schemas/characterSchema"));

// // //Modelo de films conectado a la BD
// const Film = conn.model("Film", require("./schemas/filmSchema"));

// // //Modelo de planets conectado a la BD
// const Planet = conn.model("Planet", require("./schemas/planetSchema"));

//Con esto hacemos la consulta a la base de datos con base al schema Character
//Ejecutamos en la consola "node ./src/database/index.js"
// Planet.find()
//     .populate("films", ["_id", "title"])
//     .then((res) => console.log(res[0].films));

module.exports = {
    Character:conn.model("Character", require("./schemas/characterSchema")),
    Film: conn.model("Film", require("./schemas/filmSchema")),
    Planet: conn.model("Planet", require("./schemas/planetSchema"))
}