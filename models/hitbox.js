'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hitbox extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hitbox.init({
    name: DataTypes.STRING,
    length: DataTypes.STRING,
    width: DataTypes.STRING,
    height: DataTypes.STRING,
    angle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hitbox',
  });
  return hitbox;
};