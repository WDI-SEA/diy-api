'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class baseball extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  baseball.init({
    team: DataTypes.STRING,
    league: DataTypes.STRING,
    location: DataTypes.STRING,
    championships: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'baseball',
  });
  return baseball;
};