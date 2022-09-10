'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doodles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  doodles.init({
    id: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    personality: DataTypes.STRING,
    img_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'doodles',
  });
  return doodles;
};