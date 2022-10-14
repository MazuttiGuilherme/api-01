'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert(
      'Users', 
      [
        {
          name: 'Pedrinho da Datagrupo',
          atctive: true,
          email: 'pedrinho@datagrupo.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Guilherme da Datagrupo',
          atctive: true,
          email: 'guilherme@datagrupo.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Andre de Minas',
          atctive: true,
          email: 'andre@minas.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Alexandre Corinthiano',
          atctive: true,
          email: 'alexandre@corinthians.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Danilo Brum',
          atctive: true,
          email: 'danilo@bootcamp.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Wellington Prof. Temp',
          atctive: true,
          email: 'prof@temp.com',
          role: 'guest',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fran de Portugal',
          atctive: true,
          email: 'fran@portugal.com',
          role: 'developer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ariel Junior',
          atctive: true,
          email: 'ariel@infnet.com',
          role: 'guest',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ana Beatriz',
          atctive: true,
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
