//Simulacion de modelo (Json)
const films = require("./films.json");
const axios = require("axios");


//simulacion de modelos
module.exports = {
    //Listar todas las peliculas
    list: async () => {
        const response = await axios.get('http://database:8004/Film');
        if (response.data) {
            return response.data;
        } else {
            throw Error("Ha ocurrido un error en la solicitud a la base de datos");
        }
    },
    //Obtener una pelicula por su id
    id: async (id) => {
        const response = await axios.get(`http://database:8004/Film/${id}`);
        if (response.data) {
            return response.data
        } else {
            throw Error("No existe ese film");
        }
    },
}