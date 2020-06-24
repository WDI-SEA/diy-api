'use strict';
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    name: DataTypes.STRING,
    duration: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.INTEGER
  }, {});
  country.associate = function(models) {
    // associations can be defined here
  };
  return country;
};

