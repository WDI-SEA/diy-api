'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.team.belongsTo(models.organization);
    }
  }
  team.init({
    name: DataTypes.STRING,
    created: DataTypes.DATEONLY,
    region: DataTypes.STRING,
    winnings: DataTypes.INTEGER,
    organizationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'team',
  });
  return team;
};