const User = require('./User')
const Quiz = require('./Quiz')
const Question = require('./Question')
const Highscore = require('./Highscore')

User.hasMany(Quiz, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Quiz.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE'
})

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE'
})

User.hasMany(Highscore, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Highscore.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Quiz.hasMany(Highscore, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE'
})

Highscore.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE'
})

module.exports = {
    User,
    Quiz,
    Question,
    Highscore
}