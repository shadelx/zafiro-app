const { DataTypes } = require('sequelize');

module.exports = (sequelize)=> sequelize.define('vets',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:DataTypes.STRING,
    description:DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});