'use strict';
module.exports = (sequelize, DataTypes) => {
  const plant = sequelize.define('plant', {
    commonName: DataTypes.STRING,
    scientificName: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  plant.associate = function(models) {
    // associations can be defined here
  };
  return plant;
};