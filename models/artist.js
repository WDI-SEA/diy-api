'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.artist.hasMany(models.song)
    }
  }
  artist.init({
    stageName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'artist',
  });
  return artist;
};