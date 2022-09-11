'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  character.init({
    name: DataTypes.STRING,
    season: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    img_icon: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'character',
  });
  return character;
};