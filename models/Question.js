const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config')

class Question extends Model { }

Question.init(
    {
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choice_a: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choice_b: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choice_c: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
)

module.exports = Question