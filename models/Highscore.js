const Sequelize = require('sequelize')
const connection = require('../config/connection')

const HighScore = connection.define('highscore', {
    initials: {
        type: Sequelize.STRING
    },
    score: {
        type: Sequelize.INTEGER
    },
    quiz: {
        type: Sequelize.STRING
    }
})

module.exports = HighScore