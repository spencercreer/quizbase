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
    
    for (const quiz of quizData) {
        await Quiz.create({
            ...quiz
        })
    }

    for (const question of questionData) {
        await Question.create({
            ...question
        })
    }

    const highscore = await Highscore.bulkCreate(highscoreData, {
        individualHooks: true,
        returning: true,
    })

    process.exit(0)
}

seedDatabase()