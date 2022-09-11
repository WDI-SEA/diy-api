'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kingdoms_organisms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kingdoms_organisms.init({
    kingdomId: DataTypes.INTEGER,
    organismId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kingdoms_organisms',
  });
  return kingdoms_organisms;
};