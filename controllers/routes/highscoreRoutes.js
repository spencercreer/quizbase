const router = require('express').Router()
const { User, Quiz, Highscore } = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/:id', async (req, res) => {
    if (req.session.userId) {
        try {
            let user = await User.findOne({
                where: {
                    id: req.session.userId
                }
            })
            user = user.dataValues
            const highscores = await Highscore.findAll({
                where: {
                    quiz_id: req.params.id
                },
                include: [Quiz, User],
                order: [
                    ['score', 'DESC']
                ],
                limit: 15
            })

            res.render('highscores', { layout: 'main', user, highscores }
            )
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        try {
            const highscores = await Highscore.findAll({
                where: {
                    quiz_id: req.params.id
                },
                include: [Quiz, User],
                order: [
                    ['score', 'DESC']
                ],
                limit: 15
            })

            res.render('highscores', { layout: 'main', highscores }
            )
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
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