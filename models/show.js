'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  show.init({
    title: DataTypes.STRING,
    decription: DataTypes.STRING,
    spooky: DataTypes.BOOLEAN,
    watched: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'show',
  });
  return show;
};