/* Creamos una constante express para crear las rutas,
y empezar el servidor*/
const express = require('express');
var app = express();
// Constante con el módulo morgan
const morgan = require('morgan');
// Constante cors, para aceptar las peticiones HTTP
const cors = require('cors');
/* Definimos la variable port dandole o valor definido por el Sistema Operativo
  si no tiene valor definido se le da el puerto 3800*/
app.set('port', process.env.PORT || 3800);

// Uso de morgan
app.use(morgan('dev'));
// Indicamos que es el puerto 4200(front) por el que le viene la petición.
app.use(cors({origin: "http://localhost:4200"}));

app.use(
    express.urlencoded({
        extended: true
    })
);


app.use(express.json());

/* Usamos por defecto la ruta "/api/expenses y luego las rutas definidas
 en el fichero expenses.routes"*/
app.use("/api/expenses", require('./routes/expenses.routes'));

module.exports = app;

