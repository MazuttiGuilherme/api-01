const { Router } = require("express");
const route = Router();
const EventsController = require("./controllers/EventsController");

route.get("/events", EventsController.getAllEvents);
route.get("/events/:event_id", EventsController.getOneEvent);

route.post('/events', EventsController.createEvent);

route.put("/events/:event_id", EventsController.editEvent);

route.delete("/events/:event_id", EventsController.deleteEvent);

module.exports = route;

