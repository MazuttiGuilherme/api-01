const { Router } = require("express");
const route = Router();
const EventsControler = require("./controllers/EventsController");

route.get("/events", EventsControler.getAllEvents);
route.get("/events/:events_id", EventsControler.getOneEvent);
route.post("/events", EventsControler.createEvent);
route.put("/events/:events_id", EventsControler.editEvent);
route.delete("/events/:events_id", EventsControler.deleteEvent);

module.exports = route;
