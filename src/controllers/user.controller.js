'use strict'
const userCtrl = {}

var user = require('../models/user.js');

userCtrl.getUser= (req, res) =>{
    res.send('Get User');
}
userCtrl.createUser = (req, res) =>{
    //res.send('Create user');
    var newUser = new user(); 
    var params = req.body;//cambiar por .body
    console.log(req.body);//ver por consola los params

    newUser.expenses = params.expenses;
    // guardamos el objeto en la base de datos
    newUser.save((err, userStored) => {
        if(err) return res.status(500).send({message: 'Error al guardar'});
        if(!userStored) return res.status(404).send({messge: 'No se ha podido guardar'});
        return res.status(200).send({ user: userStored });
    });
    //const newUser = new user(req.body);
    //await newUser.save();
    //res.send(newUser, {message: 'Usuario created'});
}
userCtrl.deleteUser = (req, res) =>{
    res.send('Delete User');
}
userCtrl.editUser = (req, res) =>{
    res.send('Edit User');
}
userCtrl.getUsers = async (req, res) =>{
    //const users = await user.find();
    //res.json(users);
    res.send('get users')
}

module.exports = userCtrl;
