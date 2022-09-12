'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sponsor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.sponsor.belongsToMany(models.organization, {through: "organizations_sponsors"});
    }
  }
  sponsor.init({
    name: DataTypes.STRING,
    founded: DataTypes.STRING,
    headquarters: DataTypes.STRING,
    revenue: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sponsor',
  });
  return sponsor;
};