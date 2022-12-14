'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'Events',
      [
        {
          start_date: "2022-10-12",
          name: "Rio Innovation Week",
          user_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          start_date: "2022-08-11",
          name: "Fluentd for Log Data Unification",
          user_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          start_date: "2022-12-15",
          name: "3rd Iberoamerican Conference on Mass Spectrometry",
          user_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          start_date: "2023-04-05",
          name: "Web Summit Rio",
          user_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
    {}
  );
},

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
