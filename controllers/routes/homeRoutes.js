const router = require('express').Router()
const { Quiz, Question, Highscore, User } = require('../../models')

router.get('/', async (req, res) => {
    if (req.session.userId) {
        try {
            let user = await User.findAll({
                where: {
                    id: req.session.userId
                }
            })
            user = user[0]
            const quizzes = await Quiz.findAll({})
            res.render('index', { user, quizzes })
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        try {
            const quizzes = await Quiz.findAll({})
            res.render('index', { quizzes })
        } catch (err) {
            res.status(500).json(err)
        }
    }  
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/logout', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

module.exports = router