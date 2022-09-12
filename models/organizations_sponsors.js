'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class organizations_sponsors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  organizations_sponsors.init({
    organizationId: DataTypes.INTEGER,
    sponsorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'organizations_sponsors',
  });
  return organizations_sponsors;
};