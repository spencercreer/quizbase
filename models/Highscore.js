const Sequelize = require('sequelize')
const connection = require('../config/connection')

const Highscore = connection.define('highscore', {
    initials: {
        type: Sequelize.STRING
    },
    score: {
        type: Sequelize.INTEGER
    },
    quiz_id: {
        type: Sequelize.INTEGER
    }
})

module.exports = Highscore