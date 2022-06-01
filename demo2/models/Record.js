const { DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('records',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    
    petId:{
        type: DataTypes.INTEGER,
        references:{
            model: 'pets',
            key: 'id',
        },
        onDelete:'CASCADE',   
    },
    content:DataTypes.TEXT,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE,
})