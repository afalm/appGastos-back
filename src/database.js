// Conexión a la base de datos
const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost/users', {
    userUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Db is connected'))
    .catch(err => console.error(err));
