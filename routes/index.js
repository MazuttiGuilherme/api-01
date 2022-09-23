const usersApi = require('../apis/Users/routes')
const inscriptionsApi = require('../apis/Inscriptions/routes');

module.exports = (app) => {
    app.get("/", (req, res) => res.send('Welcome to my API!'));
    app.use("/users-api", usersApi);
    app.use("/inscriptions-api", inscriptionsApi);


};