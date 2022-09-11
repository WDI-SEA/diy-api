'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.size.belongsToMany(models.Dachshund)
    }
  }
  size.init({
    name: DataTypes.TEXT,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    sizeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'size',
  });
  return size;
};