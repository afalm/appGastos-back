// comenzamos con la conexión a la base de datos
require('./database');

const app = require('./app');

//iniciamos el servidor
app.listen(app.get('port'));

console.log('Server on port', app.get('port'));