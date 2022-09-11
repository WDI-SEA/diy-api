'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pattern extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.pattern.belongsToMany(models.dachshund, { through: 'dachshund' })
    }
  }
  pattern.init({
    name: DataTypes.TEXT,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    patternId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pattern',
  });
  return pattern;
};