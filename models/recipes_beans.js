'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipes_beans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recipes_beans.init({
    recipeId: DataTypes.INTEGER,
    beanId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'recipes_beans',
  });
  return recipes_beans;
};