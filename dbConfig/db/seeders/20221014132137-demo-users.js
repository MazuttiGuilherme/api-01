'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert(
      'Users', 
      [
        {
          name: 'Pedrinho da Datagrupo',
          active: true,
          email: 'pedrinho@datagrupo.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Guilherme da Datagrupo',
          active: true,
          email: 'guilherme@datagrupo.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Andre de Minas',
          active: true,
          email: 'andre@minas.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Alexandre Corinthiano',
          active: true,
          email: 'alexandre@corinthians.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Danilo Brum',
          active: true,
          email: 'danilo@bootcamp.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Wellington Prof. Temp',
          active: true,
          email: 'prof@temp.com',
          role: 'guest',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fran de Portugal',
          active: true,
          email: 'fran@portugal.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ariel Junior',
          active: true,
          email: 'ariel@infnet.com',
          role: 'guest',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ana Beatriz',
          active: true,
          email: 'ana@bootcamp.com',
          role: 'developer',
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
