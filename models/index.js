const Quiz = require('./Quiz')
const Question = require('./Question')
const Highscore = require('./Highscore')

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE'
})

Highscore.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE'
})

module.exports = {
    Quiz,
    Question,
    Highscore
}