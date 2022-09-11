'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('organisms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      common_name: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.INTEGER
      },
      scientific_name: {
        type: Sequelize.STRING
      },
      kingdomId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('organisms');
  }
};