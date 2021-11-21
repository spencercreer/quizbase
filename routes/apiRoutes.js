const router = require('express').Router()
const HighScore = require('../models/Highscore')
const Question = require('../models/Question')

router.get('/questions', (req, res) => {
    const questions = Question.findAll({
        where: {
            quiz_id: 1,
        },
    })
    .then(questions => res.send(questions))
    .catch(err => console.log(err))
})

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