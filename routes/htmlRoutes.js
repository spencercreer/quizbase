const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/highscores', (req, res) => {
    res.render('highscores')
})

module.exports = router