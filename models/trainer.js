'use strict';
module.exports = (sequelize, DataTypes) => {
  const trainer = sequelize.define('trainer', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    favoritePokemon: DataTypes.STRING
  }, {});
  trainer.associate = function(models) {
    // associations can be defined here
    models.trainer.hasMany(models.pokemon)
  };
  return trainer;
};