'use strict';
module.exports = (sequelize, DataTypes) => {
  const hero = sequelize.define('hero', {
    name: DataTypes.STRING,
    superpower: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  hero.associate = function(models) {
    // associations can be defined here
  };
  return hero;
};