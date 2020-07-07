'use strict';
module.exports = (sequelize, DataTypes) => {
  const plants = sequelize.define('plants', {
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  plants.associate = function(models) {
    // associations can be defined here
  };
  return plants;
};