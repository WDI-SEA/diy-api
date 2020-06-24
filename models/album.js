'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    albumTitle: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  album.associate = function(models) {
    // associations can be defined here
  };
  return album;
};