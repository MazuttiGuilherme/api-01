const {Router} = require('express');
const route = Router();

route.get('/inscriptions', (req, res) => 
    res.send({ msg: 'Funcionando', serviceRoute: 'Inscriptions Service API'}));

module.exports = route;