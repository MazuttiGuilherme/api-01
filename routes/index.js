const usersApi = require('../apis/Users/routes')
const EventMeetingApi = require('../apis/EventMeeting/routes');

module.exports = (app) => {
    app.get("/", (req, res) => res.send('Welcome to my API!'));
    app.use("/users-api", usersApi);
   // app.use("/inscriptions-api", EventMeetingApi);


};