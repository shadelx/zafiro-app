const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('pets', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  breed: DataTypes.TEXT,
  size: DataTypes.FLOAT,
  weight: DataTypes.FLOAT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});