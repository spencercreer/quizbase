const router = require('express').Router()
const HighScore = require('../models/Highscore')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/quiz', (req, res) => {
    res.render('quiz')
})

router.get('/add-highscore', (req, res) => {
    res.render('add-highscore')
})

router.get('/highscores', (req, res) => {
    HighScore.findAll()
        .then(highscores => res.render('highscores', { highscores }))
        .catch(err => console.log(err))
})

module.exports = router