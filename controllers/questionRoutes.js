const router = require('express').Router()
const { Quiz, Question, Highscore } = require('../models')
const path = require('path')

router.get('/:id', (req, res) => {
    Question.findAll({
        where: {
            quiz_id: req.params.id,
        },
        include: [Quiz]
    })
        .then(questions => res.render('questions', { questions }))
        .catch(err => console.log(err))
})

router.post('/:id', (req, res) => {
    let { question, answer, choice_a, choice_b, choice_c } = req.body 
    Question.create({
        question,
        answer,
        choice_a,
        choice_b,
        choice_c,
        quiz_id: req.params.id
    })
    .then(questions => res.redirect(`/questions/${req.params.id}`))
    .catch(err => console.log(err))
})

module.exports = router