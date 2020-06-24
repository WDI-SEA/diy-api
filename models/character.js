'use strict';
module.exports = (sequelize, DataTypes) => {
  const character = sequelize.define('character', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    class: DataTypes.STRING,
    race: DataTypes.STRING,
    realm: DataTypes.STRING,
    preferredSpec: DataTypes.STRING,
    dateMade: DataTypes.DATEONLY
  }, {});
  character.associate = function(models) {
    // associations can be defined here
  };
  return character;
};