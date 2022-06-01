const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('reports',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    vetId:{
        type:DataTypes.INTEGER,
        references:{
            model:'vets',
            key:'id',
        },
        onDelete:'CASCADE'
    },
    petId:{
        type:DataTypes.INTEGER,
        references:{
            model:'pets',
            key:'id',
        },
        onDelete:'CASCADE'
    },
    content:DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
})