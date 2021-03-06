'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expensesSchema = Schema({
    quantity: Number,
    description: String,
    date: Date
},
{
    // Añade cuando fue actualizado o creado
    timestamps: true, 
    // Que no añada la version
    versionKey: false
}
);

module.exports = mongoose.model('expenses', expensesSchema);