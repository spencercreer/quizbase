const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

class Highscore extends Model { }

Highscore.init(
    {
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