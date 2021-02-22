'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joke extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  joke.init({
    jokeName: DataTypes.STRING,
    JokeContent: DataTypes.STRING,
    reference: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'joke',
  });
  return joke;
};