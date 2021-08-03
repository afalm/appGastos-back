//creamos una constante express para crear las rutas
//y empezar el servidor
const express = require('express');
const app = express();
//Constante con el módulo morgan
const morgan = require('morgan');
//definimos la variable port dandole o valor definido por el SO
// si no tiene valor definido se le da el puerto 4000
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));// Uso de morgan

app.use("/api/users", require('./routes/user.routes'));//para poder usar las rutas

module.exports = app;