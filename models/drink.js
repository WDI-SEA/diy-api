'use strict';
module.exports = (sequelize, DataTypes) => {
  const drink = sequelize.define('drink', {
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    servedWarm: DataTypes.STRING,
    deliciousScale: DataTypes.INTEGER
  }, {});
  drink.associate = function(models) {
    // associations can be defined here
  };
  return drink;
};