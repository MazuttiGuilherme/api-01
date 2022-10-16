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

//Inscriptions
route.get("/inscriptions", usersController.getAll)
route.get("/user/:user_id/inscriptions/:inscription_id", usersController.getInscription);
route.put("inscriptions/:inscription_id/user/:user_id", usersController.editInscription);
route.post("/inscriptions/:inscription_id/user", usersController.createInscription );

module.exports = route;