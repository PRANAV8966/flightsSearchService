'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // await queryInterface.bulkInsert('airplanes', [
    //   {
    //     model_number: 'Boeing 777 ',
    //     capacity: 200,
    //     createdAT: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     model_number: 'Airbus 737 ',
    //     capacity: 300,
    //     createdAT: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     model_number: 'Boeing 104 ',
    //     capacity: 300,
    //     createdAT: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     model_number: 'Boeing 786 ',
    //     capacity: 300,
    //     createdAT: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     model_number: 'Boeing 700 ',
    //     capacity: 300,
    //     createdAT: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     model_number: 'Airbus cutt777 ',
    //     capacity: 300,
    //     createdAT: new Date(),
    //     updatedAt: new Date()
    //   },
      
    // ])

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
