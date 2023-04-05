'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('homevalues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      regionid: {
        type: Sequelize.INTEGER
      },
      sizerank: {
        type: Sequelize.STRING
      },
      regionname: {
        type: Sequelize.STRING
      },
      regiontype: {
        type: Sequelize.STRING
      },
      statename: {
        type: Sequelize.STRING
      },
      basedate: {
        type: Sequelize.DATEONLY
      },
      value2022: {
        type: Sequelize.FLOAT
      },
      value2023: {
        type: Sequelize.FLOAT
      },
      value2024: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('homevalues');
  }
};