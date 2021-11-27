const router = require('express').Router()
const { Quiz, Question, Highscore } = require('../../models')
const path = require('path')

router.get('/:id', (req, res) => {
    Quiz.findAll({
        where: {
            id: req.params.id,
        }
    })
        .then(quiz => res.render('quiz', { quiz }))
        .catch(err => console.log(err))
})

router.get('/questions/:id', (req, res) => {
    Question.findAll({
        where: {
            quiz_id: req.params.id,
        }
    })
        .then(questions => res.send(questions))
        .catch(err => console.log(err))
})

module.exports = router