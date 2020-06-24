'use strict';
module.exports = (sequelize, DataTypes) => {
  const anime = sequelize.define('anime', {
    title: DataTypes.STRING,
    makeCry: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    animeId: DataTypes.INTEGER
  }, {});
  anime.associate = function(models) {
    models.anime.hasMany(models.character)
  };
  return anime;
};