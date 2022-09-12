'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.car.belongsTo(models.hitbox)
    }
  }
  car.init({
    name: DataTypes.STRING,
    img_url: DataTypes.STRING,
    hitboxId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'car',
  });
  return car;
};