const router = require('express').Router()
const Quiz = require('../models/Quiz')
const Question = require('../models/Question')
const HighScore = require('../models/Highscore')

// get all quizzes
router.get('/quizzes', (req, res) => {
    Quiz.findAll({})
        .then(quizzes => res.send(quizzes))
        .catch(err => console.log(err))
})

// get questions for specific quiz
router.get(`/questions/:id`, (req, res) => {
    Question.findAll({
        where: {
            quiz_id: req.params.id,
        },
    })
        .then(questions => res.send(questions))
        .catch(err => console.log(err))
})

// post highscores
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