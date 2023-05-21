const { catchedAsync } = require("../utils");

module.exports = {
    getFilms: catchedAsync(require('./getFilms')),
    getFilmID: catchedAsync(require('./getFilmID'))
}