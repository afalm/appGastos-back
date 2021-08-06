const { Router } = require ('express');
const router = Router();

const expenseCtrl = require('../controllers/expense.controller');

// Con Router de express podemos ya crear rutas
//Obtenemos los gastos
router.get('/', expenseCtrl.getExpenses);
// Obtenemos un gasto según id
router.get('/:id', expenseCtrl.getExpense);
// Creamos un gasto
router.post('/create', expenseCtrl.createExpense);
// Editar gastos
router.put('/:id', expenseCtrl.updateExpense);
//Eliminar gastos
router.delete('/:id', expenseCtrl.deleteExpense);

module.exports = router;

