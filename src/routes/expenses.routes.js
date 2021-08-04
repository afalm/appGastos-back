const { Router } = require ('express');
const router = Router();

const expenseCtrl = require('../controllers/expense.controller');

//Con Router de express podemos ya crear rutas
router.get('/', expenseCtrl.getExpenses);//Obtenemos los usuarios
router.get('/:id', expenseCtrl.getExpense);// Obtenemos un usuario según id
router.post('/create', expenseCtrl.createExpense);// Creamos un usuario
router.put('/:id', expenseCtrl.editExpense);// Editar usuario
router.delete('/:id', expenseCtrl.deleteExpense);//Eliminar usuario

module.exports = router;