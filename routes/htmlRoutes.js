const router = require('express').Router()
const Quiz = require('../models/Quiz')
const Question = require('../models/Question')
const Highscore = require('../models/Highscore')
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
        include: [{
            model: Quiz,
            required: true
           }]
    })
        .then(questions => res.render('questions-page', { 
            questions,
            quiz_id: req.params.id 
        }))
        .catch(err => console.log(err))
})

module.exports = router