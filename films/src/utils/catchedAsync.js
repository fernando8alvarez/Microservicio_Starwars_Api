//MANEJO DE ERRORES

module.exports = (fn) => {
    //fn son los controladores
    return function (req, res, next) {
        /*Ejecutamos fn(), si hubo un error lo atrapamos con .catch() 
        y con el next(err) lo mando al manejador de errores de express*/
        fn(req, res).catch((err) => {
            next(err);
        })
    }
}

//Version simplificada
//(fn) => (req, res, next) => fn(req, res).catch(err => next(err))

