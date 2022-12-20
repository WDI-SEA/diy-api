'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cocktail.init({
    name: DataTypes.TEXT,
    alcoholType: DataTypes.TEXT,
    mixer: DataTypes.TEXT,
    alcohol: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cocktail',
  });
  return cocktail;
};