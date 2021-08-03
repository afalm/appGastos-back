const { Router } = require ('express');
const router = Router();

const userCtrl = require('../controllers/user.controller');

//Con Router de express podemos ya crear rutas
router.get('/', userCtrl.getUsers);//Obtenemos los usuarios
router.get('/:id', userCtrl.getUser);// Obtenemos un usuario según id
router.post('/create', userCtrl.createUser);// Creamos un usuario
router.put('/:id', userCtrl.editUser);// Editar usuario
router.delete('/:id', userCtrl.deleteUser);//Eliminar usuario

module.exports = router;