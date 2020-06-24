'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    purpose: DataTypes.STRING
  }, {});
  room.associate = function(models) {
    // associations can be defined here
    models.room.hasMany(models.product)
  };
  return room;
};