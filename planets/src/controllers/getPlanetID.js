const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const planetID = await Planet.id(id);
    response(res, 200, planetID);
}