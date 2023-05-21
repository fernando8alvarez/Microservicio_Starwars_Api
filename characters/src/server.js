const express = require('express');
const morgan = require('morgan');

const server = express();

//Middlewares
server.use(morgan("dev"));
server.use(express.json());

server.use("/characters", require('./routes'));

server.use("*", (req, res) => {
    res.status(404).send("Not found");
});

//Manejador de errores de express (sobre escribiendo)
//Los errores que ocurran en el sevidor, deberian de llegar a este lugar, a excepcion de "*"
server.use((err, req, res, next) => { 
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    })
})

module.exports = server;