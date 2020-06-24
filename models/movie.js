'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  movie.associate = function(models) {
    // associations can be defined here
  };
  return movie;
};