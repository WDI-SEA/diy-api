'use strict';
module.exports = (sequelize, DataTypes) => {
  const cannabis = sequelize.define('cannabis', {
    type: DataTypes.STRING,
    strain: DataTypes.STRING,
    flavors: DataTypes.STRING
  }, {});
  cannabis.associate = function(models) {
    // associations can be defined here
  };
  return cannabis;
};