'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  animal.init({
    scientific_name: DataTypes.STRING,
    species: DataTypes.STRING,
    breed: DataTypes.STRING,
    origin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'animal',
  });
  return animal;
};