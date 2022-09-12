'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.movie.hasMany(models.image)
      models.movie.belongsToMany(models.genre, {through: "movies_genres"})
    }
  }
  movie.init({
    title: DataTypes.STRING,
    year: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};