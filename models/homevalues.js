'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class homevalues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  homevalues.init({
    regionid: DataTypes.INTEGER,
    sizerank: DataTypes.INTEGER,
    regionname: DataTypes.STRING,
    regiontype: DataTypes.STRING,
    statename: DataTypes.STRING,
    basedate: DataTypes.DATEONLY,
    value2022: DataTypes.FLOAT,
    value2023: DataTypes.FLOAT,
    value2024: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'homevalues',
  });
  return homevalues;
};