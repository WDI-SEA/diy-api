'use strict';
module.exports = (sequelize, DataTypes) => {
  const bearer = sequelize.define('bearer', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  bearer.associate = function(models) {
    // associations can be defined here
  };
  return bearer;
};