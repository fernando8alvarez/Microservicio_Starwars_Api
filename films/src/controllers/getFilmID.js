const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const filmID = await Films.id(id);
    response(res, 200, filmID);
}