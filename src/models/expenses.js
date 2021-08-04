'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expensesSchema = Schema({
    quantity: Number
},
{
    timestamps: true, //añade cuando fue actualizado o creado
    versionKey: false //que no añada la version
}
);

module.exports = mongoose.model('expenses', expensesSchema);