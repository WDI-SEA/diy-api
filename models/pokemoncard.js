'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemoncard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pokemoncard.init({
    name: DataTypes.STRING,
    img_url: {
      type: DataTypes.STRING,
      validate: { isUrl: true }
    },
    rarity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pokemoncard',
  });
  return pokemoncard;
};