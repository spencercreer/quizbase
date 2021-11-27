const router = require('express').Router()
const { Quiz, Question, Highscore } = require('../../models')

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