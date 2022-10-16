const database = require("../../../dbConfig/db/models");
class EventsController {
  
    static async getAllEvents(req, res) {
    try {
      const allEvents = await database.Events.findAllEvents();
      return res.status(200).send(allEvents);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOneEvent(req, res) {
    const { event_id } = req.params;
    try {
      const oneEvent = await database.Events.findOne({
        where: {
          id: Number(event_id)
        }
      });
      return res.status(200).send(oneEvent);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createEvent(req, res) {
    const newEvent = req.body;
    try {
      const newCreatedEvent = await database.Events.createEvent(newEvent);
      return res.status(200).send(newCreatedEvent);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async editEvent(req, res) {
    const { event_id } = req.params;
    const newEventInfo = req.body;
    try {
      await database.Events.update(newEventInfo, {
        where: {
          id: Number(event_id)
        }
      });

      const updatedEvent = await database.Events.findOneEvent({
        where: {
          id: Number(event_id)
        }
      });
      return res.status(200).send(updatedEvent);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deleteEvent(req, res) {
    const { event_id } = req.params;
    try {
      await database.Events.destroy({
        where: {
          id: Number(event_id),
          event_id: Number(event_id)
        }
      });
      return res
        .status(200)
        .send({ msg: `O evento de ID: ${event_id} foi deletado com sucesso!` });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = EventsController;

