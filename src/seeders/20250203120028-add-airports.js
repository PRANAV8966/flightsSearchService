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

    await queryInterface.bulkInsert('Airports', [
      {
        name: "Nagpur National Airport",
        cityId: 29,
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nagpur National Airport1",
        cityId: 29,
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nagpur National Airport2",
        cityId: 29,
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nagpur National Airport3",
        cityId: 29,
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rajasthan National Airport",
        cityId: 27,
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rajasthan National Airport1",
        cityId: 27,
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rajasthan National Airport3",
        cityId: 27,
        createdAT: new Date(),
        updatedAt: new Date()
      },
    ])
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
