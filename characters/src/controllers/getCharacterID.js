const Characters = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const characterID = await Characters.id(id);
    response(res, 200, characterID);
}