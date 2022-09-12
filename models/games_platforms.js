'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class games_platforms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  games_platforms.init({
    gameId: DataTypes.INTEGER,
    platformId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'games_platforms',
  });
  return games_platforms;
};