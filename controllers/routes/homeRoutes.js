const router = require('express').Router()
const { Quiz, Question, Highscore } = require('../../models')

router.get('/', (req, res) => {
    Quiz.findAll({})
        .then(quizzes => res.render('index', { quizzes }))
        .catch(err => console.log(err))
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

module.exports = router