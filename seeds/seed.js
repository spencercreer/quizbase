const sequelize = require('../config/connection')
const { Quiz, Question, Highscore } = require('../models')

const quizData = require('./quizData.json')
const questionData = require('./questionsData.json')

const seedDatabase = async () =>{
    await sequelize.sync({ force: true })
    
    const quizzes = await Quiz.bulkCreate(quizData, {
        individualHooks: true,
        returning: true,
    })

    const questions = await Question.bulkCreate(questionData, {
        individualHooks: true,
        returning: true,
    })

    process.exit(0)
}

seedDatabase()