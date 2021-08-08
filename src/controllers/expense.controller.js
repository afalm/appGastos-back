'use strict'
const expenseCtrl = {}

var expense = require('../models/expenses.js');

expenseCtrl.getExpense = async (req, res) =>{
    var expenseId = req.params.id;
    expense.findById(expenseId,(err, expenseFound)=>{
        if(expense.err) return res.status(500).send({ message: "Error al mostrar la consulta"});
        if(!expenseFound) return res.status(404).send({ messaje: "No hay gastos que consultar" });
        return res.json(expenseFound);
    });
      
}
expenseCtrl.createExpense = (req, res) =>{// BUG
    var newExpense = new expense(); 
    var params = req.body;
    console.log(req.body);

    newExpense.quantity = params.quantity;
    newExpense.description = params.description;
    newExpense.date = params.date;
    // Guardamos el objeto en la base de datos
    newExpense.save((err, expenseStored) => {
        if(err || params.quantity == null ) return res.status(500).send({ message: 'Error al guardar' });
        if(!expenseStored ) return res.status(404).send({ messge: 'No se ha podido guardar' });
        return res.status(200).send({ expense: expenseStored });
    });
}
expenseCtrl.deleteExpense = (req, res) =>{
    var expenseId = req.params.id;
    expense.findByIdAndDelete(expenseId, (err, expenseRemoved) =>{
        if(expense.err) return res.status(500).send({ message: "Error al eliminar el gasto" });
        if(!expenseRemoved) return res.status(404).send({ message: "No se puede eliminar ese gasto" });
        return res.status(200).send({ expenseRemoved });
    })
}
expenseCtrl.updateExpense = (req, res) =>{
    // Recoje el id que le hemos pasado por la url 
    var expenseId = req.params.id;
    // Recoje el nuevo objeto
    var expenseUpdate = req.body;

    expense.findByIdAndUpdate(expenseId, expenseUpdate, (err, expenseUpdate) => {
        if(expense.err) return res.status(500).send({ message: "Error al actualizar el gasto" });
        if(!expenseUpdate) return res.status(404).send({ messaje: "No existe el gasto para actualizar" });

        return res.status(200).send({
            expense: expenseUpdate
        })
    });
}
expenseCtrl.getExpenses = async (req, res) =>{
    const expenses = await expense.find();
    if(expense.err) res.status(500).send({ message: "Error al mostrar la consulta."});
    if(!expenses) res.status(404).send({ messaje: "No hay gastos que consultar" });//recordar para commit
    res.json(expenses);
    
}

module.exports = expenseCtrl;
