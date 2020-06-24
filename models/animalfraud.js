'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animalfraud extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  animalfraud.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    species: DataTypes.STRING,
    factoid: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'animalfraud',
  });
  return animalfraud;
};