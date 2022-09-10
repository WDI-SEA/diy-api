'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.category.belongsToMany(models.merchant, { through: "categories_merchants"})
      models.category.hasMany(models.expense)
    }
  }
  category.init({
    name: DataTypes.STRING,
    budget: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};