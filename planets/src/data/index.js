//Simulacion de modelo (Json)
const planets = require("./planets.json");
const axios = require("axios");

//simulacion de modelos
module.exports = {
    //Listar todos los planetas
    list: async () => {
        const response = await axios.get('http://database:8004/Planet');
        if (response.data) {
            return response.data
        } else {
            throw Error("Ha ocurrido un error en la solicitud a la base de datos");
        }
    },
    //Obtener un planeta por su id
    id: async (id) => {
        const response = await axios.get(`http://database:8004/Planet/${id}`);
        if (response.data) {
            return response.data
        } else {
            throw Error("No existe ese planeta");
        }
    },
}