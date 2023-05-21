module.exports = (req, res, next) => {
    const { model, id } = req.params;
    if (["Character", "Film", "Planet"].includes(model)) {
        return next();
    }
    else {
        throw Error("Invalidate model");
    }

}