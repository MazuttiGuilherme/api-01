'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Inscriptions",
      [
        {
          status: "confirmed",
          user_id: 1,
          events_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "confirmed",
          user_id: 2,
          events_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "confirmed",
          user_id: 3,
          events_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "confirmed",
          user_id: 4,
          events_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "cancelled",
          user_id: 1,
          events_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "cancelled",
          user_id: 2,
          events_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
