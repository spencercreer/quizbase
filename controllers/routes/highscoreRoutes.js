const router = require('express').Router()
const { Quiz, Question, Highscore } = require('../../models')

router.get('/:id', (req, res) => {
    Highscore.findAll({
        where: {
            quiz_id: req.params.id
        },
        include: [Quiz],
        order: [
            ['score', 'DESC']
        ],
        limit: 15
    })
        .then(highscores => res.render('highscores', { highscores }))
        .catch(err => console.log(err))
})

// post highscores
router.post('/add/:id', (req, res) => {
    let { initials, score } = req.body
    HighScore.create({
        initials,
        score: 20,
        quiz_id: parseInt(req.params.id)
    })
        .then(highscore => res.redirect('/quiz'))
        .catch(err => console.log(err))
})


module.exports = router