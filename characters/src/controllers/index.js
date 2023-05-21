const {catchedAsync} = require("../utils");
module.exports = {
    getCharacters: catchedAsync(require("./getCharacters")),
    getCharacterID: catchedAsync(require("./getCharacterID")),
    createCharacters: catchedAsync(require("./createCharacters"))
}