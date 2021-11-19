const Sequelize = require('sequelize')
const connection = require('../config/connection')

const Quiz = connection.define('quiz', {
    quiz: {
        type: Sequelize.STRING
    },
})

module.exports = Quiz