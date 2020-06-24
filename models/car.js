'use strict';
module.exports = (sequelize, DataTypes) => {
  const car = sequelize.define('car', {
    carName: DataTypes.STRING,
    model: DataTypes.STRING,
    make: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  car.associate = function(models) {
    // associations can be defined here
  };
  return car;
};