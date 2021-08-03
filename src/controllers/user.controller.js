const userCtrl = {}

userCtrl.getUser= (req, res) =>{
    res.send('Get User');
}
userCtrl.createUser = (req, res) =>{
    res.send('Create User');
}
userCtrl.deleteUser = (req, res) =>{
    res.send('Delete User');
}
userCtrl.editUser = (req, res) =>{
    res.send('Edit User');
}
userCtrl.getUsers = (req, res) =>{
    res.send('Get Users');
}

module.exports = userCtrl;