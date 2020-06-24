'use strict';
module.exports = (sequelize, DataTypes) => {
  const pokemon = sequelize.define('pokemon', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    weakAgainst: DataTypes.STRING,
    trainerId: DataTypes.INTEGER
  }, {});
  pokemon.associate = function(models) {
    // associations can be defined here
    models.pokemon.belongsTo(models.trainer)
  };
  return pokemon;
};