const router = require('express').Router()
const { User, Quiz, Question, Highscore } = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/:id', (req, res) => {
    const session = req.session
    Highscore.findAll({
        where: {
            quiz_id: req.params.id
        },
        include: [Quiz, User],
        order: [
            ['score', 'DESC']
        ],
        limit: 15
    })
        .then(highscores => res.render('highscores', { highscores, session }))
        .catch(err => console.log(err))
})

router.post('/add/:id', withAuth, (req, res) => {
    let { userId, score } = req.body
    Highscore.create({
        user_id: userId,
        score,
        quiz_id: parseInt(req.params.id)
    })
        .then(() => res.redirect(`/highscores/${req.params.id}`))
        .catch(err => console.log(err))
})

module.exports = router