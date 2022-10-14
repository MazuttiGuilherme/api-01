const {Router} = require('express');
const route = Router();
const usersController = require('./controllers/UsersController');



route.get("/all-trueUsers", usersController.getAllTrue);
route.get("/all-falseUsers", usersController.getAllFalse);
route.get('/users', usersController.getAll);
route.get("/user/:userId", usersController.getOne);
route.post("/user", usersController.createUser);
route.put("/edit-user/:userId", usersController.editUser);
route.delete("/delete-user/:userId", usersController.deleteUser);



module.exports = route;