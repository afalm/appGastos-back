require('./database'); // comenzamos con la conexión a la base de datos
const app = require('./app');

app.listen(app.get('port'));//iniciamos el servidor
console.log('Server on port', app.get('port'));