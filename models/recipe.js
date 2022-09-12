'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.recipe.hasMany(models.brewingdevice)
      models.recipe.belongsToMany(models.bean, { through: "recipes_beans "})
    }
  }
  recipe.init({
    name: DataTypes.STRING,
    brewingdevice: DataTypes.STRING,
    watertemp: DataTypes.INTEGER,
    grinder: DataTypes.STRING,
    grindsetting: DataTypes.INTEGER,
    groundcoffee: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'recipe',
  });
  return recipe;
};