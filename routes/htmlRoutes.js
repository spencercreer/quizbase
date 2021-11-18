const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/quiz', (req, res) =>{
    res.render('quiz')
})

router.get('/add-highscore', (req, res) => {
    res.render('add-highscore')
})

router.get('/highscores', (req, res) => {
    res.render('highscores')
})

module.exports = router