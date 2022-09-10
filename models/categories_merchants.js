'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories_merchants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  categories_merchants.init({
    categoryId: DataTypes.INTEGER,
    merchantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'categories_merchants',
  });
  return categories_merchants;
};