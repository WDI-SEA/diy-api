'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doodles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      breed: {
        type: Sequelize.STRING
      },
      personality: {
        type: Sequelize.STRING
      },
      img_url: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('doodles');
  }
};