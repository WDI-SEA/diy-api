'use strict';
module.exports = (sequelize, DataTypes) => {
  const game = sequelize.define('game', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER
  }, {});
  game.associate = function(models) {
    // associations can be defined here
  };
  return game;
};