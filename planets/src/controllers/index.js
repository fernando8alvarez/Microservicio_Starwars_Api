const { catchedAsync } = require("../utils");

module.exports = {
    getPlanets: catchedAsync(require('./getPlanets')),
    getPlanetID: catchedAsync(require('./getPlanetID'))
}