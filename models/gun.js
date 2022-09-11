'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gun extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  gun.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    video: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'gun',
  });
  return gun;
};