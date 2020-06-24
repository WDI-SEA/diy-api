'use strict';
module.exports = (sequelize, DataTypes) => {
  const super = sequelize.define('super', {
    name: DataTypes.STRING,
    superpower: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  super.associate = function(models) {
    // associations can be defined here
  };
  return super;
};