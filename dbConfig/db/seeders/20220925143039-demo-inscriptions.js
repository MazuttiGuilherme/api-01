'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Inscriptions",
      [
        {
          status: "confirmed",
          developer_id: 1,
          event_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "confirmed",
          developer_id: 2,
          event_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "confirmed",
          developer_id: 3,
          event_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "confirmed",
          developer_id: 4,
          event: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "cancelled",
          developer_id: 1,
          event_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "cancelled",
          developer_id: 2,
          event_id: 2,
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
