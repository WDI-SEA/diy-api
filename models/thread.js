'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  thread.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    parent_forum: DataTypes.STRING,
    user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'thread',
  });
  return thread;
};