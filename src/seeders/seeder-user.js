'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'trungquangta115@gmail.com',
      password: '123',
      firstName: 'Ta',
      lastName: 'Quang Trung',
      address: 'HCM',
      gender: 1,
      roleId: '1',
      phoneNumber: '0352393384',
      positionId: '1',
      image: '1',
      createdAt: new Date(),
      updatedAt: new Date()

      // positionId: DataTypes.STRING,
      // image: DataTypes.STRING,
    }]);
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
