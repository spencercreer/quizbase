const router = require('express').Router()
const HighScore = require('../models/Highscore')

router.post('/add-highscore', (req, res) => {
    let { initials, score, quiz } = req.body
    HighScore.create({
        initials,
        score,
        quiz
    })
    .then(highscore => res.redirect('/highscores'))
    .catch(err => console.log(err))
})

module.exports = router