'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  job.init({
    position: DataTypes.STRING,
    link: DataTypes.TEXT,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'job',
  });
  return job;
};