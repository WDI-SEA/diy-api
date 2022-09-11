'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class organism extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.organism.belongsTo(models.kingdom)
    }
  }
  organism.init({
    common_name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    scientific_name: DataTypes.STRING,
    kingdomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'organism',
  });
  return organism;
};