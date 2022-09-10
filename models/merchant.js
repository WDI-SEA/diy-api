'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.merchant.belongsToMany(models.category, { through: "categories_merchants"})
      models.merchant.hasMany(models.expense)
    }
  }
  merchant.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'merchant',
  });
  return merchant;
};