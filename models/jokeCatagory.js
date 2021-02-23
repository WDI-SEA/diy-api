'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jokeCatagory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  jokeCatagory.init({
    jokeName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jokeCatagory',
  });
  return jokeCatagory;
};