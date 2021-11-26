const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

class Quiz extends Model { }

Quiz.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        quiz_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Quiz'
    }
)

module.exports = Quiz