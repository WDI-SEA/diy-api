'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class planet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // planets are a parent in the 1:M with moon
      models.planet.hasMany(models.moon)
    }
  }
  planet.init({
    name: DataTypes.STRING,
    mass: DataTypes.DOUBLE,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'planet',
  });
  return planet;
};