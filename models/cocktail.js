'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.cocktail.hasMany(models.spirit)
    }
  }
  cocktail.init({
    name: DataTypes.STRING,
    recipe: DataTypes.STRING,
    garnish: DataTypes.STRING,
    glassware: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cocktail',
  });
  return cocktail;
};