'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dachshund extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.dachshund.hasMany(models.color)
      models.dachshund.hasMany(models.pattern)
      models.dachshund.hasMany(models.coatType)
      models.dachshund.hasMany(models.size)
    }
  }
  dachshund.init({
    name: DataTypes.TEXT,
    color: DataTypes.STRING,
    pattern: DataTypes.STRING,
    size: DataTypes.STRING,
    coatType: DataTypes.STRING,
    dachshundId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dachshund',
  });
  return dachshund;
};