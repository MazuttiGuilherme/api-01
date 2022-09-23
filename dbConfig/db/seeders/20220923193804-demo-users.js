'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   /** 
     * Add seed commands here.
     *
     * Example:
     * */
    await queryInterface.bulkInsert(
      'Users', 
      [
        {
          name: "John Doe from USA",
          email: "john@usa.com",
          active: true,
          role: "guest",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Andre from Minas",
          email: "andre@minas.com",
          active: false,
          role: "developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Fran from Portugal",
          email: "fran@portugal.com",
          active: true,
          role: "guest",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Alexandre Corinthiano",
          email: "alexandre@corinthians.com",
          active: true,
          role: "developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Guilherme from Rio",
          email: "guilherme@carioca.com",
          active: false,
          role: "developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      
      ], {});
   
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
