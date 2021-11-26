const Quiz = require('./Quiz')
const Question = require('./Question')
const Highscore = require('./Highscore')

Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE'
})

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