'use strict';
module.exports = (sequelize, DataTypes) => {
  const plate = sequelize.define('plate', {
    distributor: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    material: DataTypes.STRING
  }, {});
  plate.associate = function(models) {
    // associations can be defined here
  };
  return plate;
};