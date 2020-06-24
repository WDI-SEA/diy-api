'use strict';
module.exports = (sequelize, DataTypes) => {
  const anime = sequelize.define('anime', {
    title: DataTypes.STRING,
    makeCry: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  anime.associate = function(models) {
    // associations can be defined here
  };
  return anime;
};