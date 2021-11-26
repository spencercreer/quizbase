const Sequelize = require('sequelize')
const connection = require('../config/connection')

const Question = connection.define('question', {
    question: {
        type: Sequelize.STRING
    },
    answer: {
        type: Sequelize.STRING
    },
    choice_a: {
        type: Sequelize.STRING
    },
    choice_b: {
        type: Sequelize.STRING
    },
    choice_c: {
        type: Sequelize.STRING
    },
    quiz_id: {
        type: Sequelize.INTEGER
    }
})

module.exports = Question