const usersApi = require('../apis/Users/routes')
const eventsApi = require('../apis/EventMeeting/routes');

module.exports = (app) => {
    app.get("/", (req, res) => res.send({msg: 'Welcome to my API!'}));
    app.use("/users-api", usersApi);
    app.use("/events-api", eventsApi);
};