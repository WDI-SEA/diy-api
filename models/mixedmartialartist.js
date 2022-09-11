'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mixedmartialartist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mixedmartialartist.init({
    name: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    weight_class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mixedmartialartist',
  });
  return mixedmartialartist;
};