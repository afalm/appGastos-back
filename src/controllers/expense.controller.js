'use strict'
const expenseCtrl = {}

var expense = require('../models/expenses.js');

expenseCtrl.getExpense= (req, res) =>{
    res.send('Get Expense');
}
expenseCtrl.createExpense = (req, res) =>{
    var newExpense = new expense(); 
    var params = req.body;
    console.log(req.body);

    newExpense.quantity = params.quantity;
    // Guardamos el objeto en la base de datos
    newExpense.save((err, expenseStored) => {
        if(err) return res.status(500).send({message: 'Error al guardar'});
        if(!expenseStored) return res.status(404).send({messge: 'No se ha podido guardar'});
        return res.status(200).send({ expense: expenseStored });
    });
}
expenseCtrl.deleteExpense = (req, res) =>{
    res.send('Delete Expense');
}
expenseCtrl.editExpense = (req, res) =>{
    res.send('Edit Expense');
}
expenseCtrl.getExpenses = async (req, res) =>{
    const expenses = await expense.find();
    if(expenses.err) res.status(500).send({ message: "Error al mostrar la consulta."})
    res.json(expenses);
    
}

module.exports = expenseCtrl;
