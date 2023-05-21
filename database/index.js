const server = require('./src/server');
const { Character, Film, Planet } = require("./src/database/index");

//Lista todos los personajes, obteniendo la propiedad "homeworld" con solo su id y name
//y filtrando la propiedad "films" con solo si id y title
//Planet.get(10).then((res) => console.log(res));

//Obtiene un personaje por id, ademas de obtener la propiedad "homeworld" con solo su id y name
//y filtrando la propiedad "films" con solo si id y title
//Character.get(1).then((res) => console.log(res));

// Planet.insert({
//     _id: '61',
//     name: 'Pandora',
//     rotation_period: 'unknown',
//     orbital_period: 'unknown',
//     diameter: 'unknown',
//     climate: 'Tropical',
//     gravity: 'unknown',
//     terrain: 'Montañas, playas, selvas, rocasc flotantes',
//     surface_water: 'unknown',
// }).then((res) => console.log(res))

// Film.insert({
//     _id: '9',
//     title: 'Avatar 2',
//     opening_crawl: 'Un mundo en la galaxia con habitantes de piel azul',
//     director: 'Fernando Alvarez',
//     producer: 'Fernando Alvarez',
//     release_date: 2023-05-18
// }).then((res) => console.log(res))

// Character.insert({
//     _id: "202",
//     name: "Fernando",
//     birth_year: "1994",
//     gender:29
// }).then((res) => console.log(res))

const PORT = 8004;

server.listen(PORT, () => {
    console.log(`DataBase on port ${PORT}`)
})