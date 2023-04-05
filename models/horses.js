'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class horses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  horses.init({
    breed: DataTypes.STRING,
    characteristics: DataTypes.STRING,
    img_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'horses',
  });
  return horses;
};