'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kingdom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.kingdom.hasMany(models.organism)
    }
  }
  kingdom.init({
    kingdom_name: DataTypes.STRING,
    traits: DataTypes.STRING,
    known_species: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kingdom',
  });
  return kingdom;
};