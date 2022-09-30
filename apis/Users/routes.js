const {Router} = require('express');
const route = Router();
const usersController = require('./controllers/UsersController');


//Users
route.get("/all-trueUsers", usersController.getAllTrue);
route.get("/all-falseUsers", usersController.getAllFalse);
route.get('/users', usersController.getAll);
route.get("/user/:userId", usersController.getOne);
route.post("/user", usersController.createUser);
route.put("/edit-user/:userId", usersController.editUser);
route.delete("/delete-user/:userId", usersController.deleteUser);


//Inscriptions
route.get('/inscriptions', usersController.getAll);
route.post('/inscriptions/:developer_id/user/', usersController.createUser);

route.put('/inscriptions/:inscription_id/user/developer_id', usersController.editUser)


module.exports = route;