'use strict';
module.exports = (sequelize, DataTypes) => {
  const character = sequelize.define('character', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    power: DataTypes.STRING,
    animeId: DataTypes.INTEGER
  }, {});
  character.associate = function(models) {
    models.character.belongsTo(models.anime)
  };
  return character;
};