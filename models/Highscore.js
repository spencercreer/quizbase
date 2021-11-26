const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

class Highscore extends Model { }

Highscore.init(
    {
        initials: {
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize
    }
)

module.exports = Highscore