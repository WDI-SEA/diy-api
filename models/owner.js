'use strict';
module.exports = (sequelize, DataTypes) => {
  const owner = sequelize.define('owner', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dlNum: DataTypes.STRING,
    insurance: DataTypes.BOOLEAN
  }, {});
  owner.associate = function(models) {
    // associations can be defined here
  };
  return owner;
};