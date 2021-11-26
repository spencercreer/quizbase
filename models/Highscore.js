const Sequelize = require('sequelize')
const connection = require('../config/connection')
const Quiz = require('./Quiz')

const Highscore = connection.define('highscore', {
    initials: {
        type: Sequelize.STRING
    },
    score: {
        type: Sequelize.INTEGER
    },
    quiz_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Quiz,
            key: 'id'
        }
    }
})

module.exports = Highscore