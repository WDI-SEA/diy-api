'use strict';
module.exports = (sequelize, DataTypes) => {
  const chicken = sequelize.define('chicken', {
    species: DataTypes.STRING,
    origin: DataTypes.STRING,
    purpose: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  chicken.associate = function(models) {
    // associations can be defined here
  };
  return chicken;
};