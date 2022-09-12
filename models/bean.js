'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bean extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.bean.belongsToMany(models.recipe, { through: "recipes_beans "})
    }
  }
  bean.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    roastlevel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bean',
  });
  return bean;
};