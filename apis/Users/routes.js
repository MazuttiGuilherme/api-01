const {Router} = require('express');
const route = Router();
const usersController = require('./controllers/UsersController');

route.get('/users', usersController.getAll);
route.get("/user/:userId", usersController.getOne);
route.post("/user", usersController.createUser);

module.exports = route;