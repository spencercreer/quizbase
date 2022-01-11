const sequelize = require('../config/config')
const { User, Quiz, Question, Highscore } = require('../models')

const userData = require('./userData.json')
const quizData = require('./quizData.json')
const questionData = require('./questionsData.json')
const highscoreData = require('./highscoreData.json')

const seedDatabase = async () =>{
    await sequelize.sync({ force: true })

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    })
    
    const quizzes = await Quiz.bulkCreate(quizData, {
        individualHooks: true,
        returning: true,
    })

    const questions = await Question.bulkCreate(questionData, {
        individualHooks: true,
        returning: true,
    })

    const highscore = await Highscore.bulkCreate(highscoreData, {
        individualHooks: true,
        returning: true,
    })

    process.exit(0)
}

seedDatabase()