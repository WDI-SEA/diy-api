'use strict';
module.exports = (sequelize, DataTypes) => {
  const candy = sequelize.define('candy', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  candy.associate = function(models) {
    // associations can be defined here
    models.candy.belongsTo(models.user)
  };
  return candy;
};