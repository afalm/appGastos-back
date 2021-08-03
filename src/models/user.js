'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    expenses: Number
},
{
    timestamps: true, //añade cuando fue actualizado o creado
    versionKey: false //que no añada la version
}
);

module.exports = mongoose.model('user', userSchema);