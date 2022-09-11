'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.color.belongsToMany(models.dachshund)
    }
  }
  color.init({
    name: DataTypes.TEXT,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    colorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'color',
  });
  return color;
};