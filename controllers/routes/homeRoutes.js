const router = require('express').Router()
const { Quiz, Question, Highscore } = require('../../models')
const path = require('path')

router.get('/', (req, res) => {
    Quiz.findAll({})
        .then(quizzes => res.render('index', { quizzes }))
        .catch(err => console.log(err))
})

module.exports = router