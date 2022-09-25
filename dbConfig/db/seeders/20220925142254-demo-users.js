'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name:"Paulinho da DataGrupo",
          email:"paulinhodatagrupo@test.com",
          active:true,
          role:"developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Andre de Minas",
          email:"andre@minas.com",
          active:true,
          role:"developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Alexandre Corinthiano",
          active:true,
          email:"alexandre@corinthians.com",
          role:"developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Fran de Portugal",
          active: true,
          email: "fran@portugal.com",
          role:"developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Marcelo do Rio",
          active:true,
          email:"marcelo@carioca.com",
          role:"developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"Wellington Prof Temp",
          active:true,
          email:"prof@temp.com",
          role:"guest",
          createdAt: new Date(),
          updatedAt: new Date()
        },
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
