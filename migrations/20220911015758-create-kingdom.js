'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kingdoms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kingdom_name: {
        type: Sequelize.STRING
      },
      traits: {
        type: Sequelize.STRING
      },
      known_species: {
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
    await queryInterface.dropTable('kingdoms');
  }
};