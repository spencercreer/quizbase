const router = require('express').Router()
const { Quiz, Question, Highscore } = require('../models')

// get all quizzes
router.get('/quizzes', (req, res) => {
    Quiz.findAll({})
        .then(quizzes => res.send(quizzes))
        .catch(err => console.log(err))
})

// get questions for specific quiz
// router.get('/questions/:id', (req, res) => {
//     Question.findAll({
//         where: {
//             quiz_id: req.params.id,
//         },
//     })
//         .then(questions => res.send(questions))
//         .catch(err => console.log(err))
// })

// post highscores
router.post('/highscore/add/:id', (req, res) => {
    let { initials, score } = req.body
    HighScore.create({
        initials,
        score: 20,
        quiz_id: parseInt(req.params.id)
    })
        .then(highscore => res.redirect('/quiz'))
        .catch(err => console.log(err))
})
// post question


module.exports = router