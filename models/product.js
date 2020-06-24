'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    prodName: DataTypes.STRING,
    color: DataTypes.STRING,
    purpose: DataTypes.TEXT,
    roomId: DataTypes.INTEGER
  }, {});
  product.associate = function(models) {
    // associations can be defined here
    models.product.belongsTo(models.room)
  };
  return product;
};