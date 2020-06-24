'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bestAlbum: DataTypes.STRING
  }, {});
  artist.associate = function(models) {
    // associations can be defined here
    // models.artist.hasMany(models.songs)
  };
  return artist;
};