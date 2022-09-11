'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cartoons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cartoons.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    episodes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cartoons',
  });
  return cartoons;
};