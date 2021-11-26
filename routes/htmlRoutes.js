const router = require('express').Router()
const { Quiz, Question, Highscore } = require('../models')
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/quiz.html'))
})

router.get('/questions-page/:id', (req, res) => {
    Question.findAll({
        where: {
            quiz_id: req.params.id,
        },
        include: [Quiz]
    })
        .then(questions => {
            questions = questions.map(question => question.get({ plain: true }))
            console.log(questions)
            res.render('questions-page', { 
                questions
            })
        })
        .catch(err => console.log(err))
})

module.exports = router