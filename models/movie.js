'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  movie.associate = function(models) {
    // associations can be defined here
  };
  return movie;
};