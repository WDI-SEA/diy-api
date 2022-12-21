'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class moon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // one planet can have many moons
      // moon is the child in a 1 to many
      models.moon.belongsTo(models.planet)
    }
  }
  moon.init({
    name: DataTypes.STRING,
    mass: DataTypes.DOUBLE,
    planetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'moon',
  });
  return moon;
};