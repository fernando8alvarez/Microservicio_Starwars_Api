//Simulacion de modelo (Json)
const characters = require("./characters.json");
const axios = require("axios");

//Peticiones a la Base de Datos sobre personajes
module.exports = {
    //Listar todos los personajes
    list: async () => {
        const response = await axios.get('http://database:8004/Character');
        if (response.data) {
            return response.data
        } else {
            throw Error("Ha ocurrido un error en la solicitud a la base de datos");
        }
    },
    //Obtener un personaje por su id
    id: async (id) => {
        const response = await axios.get(`http://database:8004/Character/${id}`);
        if (response.data) {
            return response.data
        } else {
            throw Error("No existe ese personaje");
        }
    },
    //crear a un personaje
    create: async (newCharacter) => {
        const response = await axios.post('http://database:8004/Character', newCharacter);
        
        if (response.data) {
            return response.data
        } else {
            throw Error("Hay un error al momento de crear un personaje");
        }
    }
}