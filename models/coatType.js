'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coatType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.coatType.belongsToMany(models.dachshund)
    }
  }
  coatType.init({
    name: DataTypes.TEXT,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    coatTypeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'coatType',
  });
  return coatType;
};