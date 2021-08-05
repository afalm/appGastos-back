const { Router } = require ('express');
const router = Router();

const expenseCtrl = require('../controllers/expense.controller');

//Con Router de express podemos ya crear rutas
router.get('/', expenseCtrl.getExpenses);//Obtenemos los gastos
router.get('/:id', expenseCtrl.getExpense);// Obtenemos un gasto según id
router.post('/create', expenseCtrl.createExpense);// Creamos un gasto
router.put('/:id', expenseCtrl.editExpense);// Editar gastos
router.delete('/:id', expenseCtrl.deleteExpense);//Eliminar gastos

module.exports = router;