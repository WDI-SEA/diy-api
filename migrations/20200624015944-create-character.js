'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      level: {
        type: Sequelize.INTEGER
      },
      class: {
        type: Sequelize.STRING,
        allowNull: false
      },
      race: {
        type: Sequelize.STRING,
        allowNull: false
      },
      realm: {
        type: Sequelize.STRING
      },
      preferredSpec: {
        type: Sequelize.STRING
      },
      dateMade: {
        type: Sequelize.DATEONLY
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('characters');
  }
};