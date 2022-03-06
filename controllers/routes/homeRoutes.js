const router = require('express').Router()
const { Quiz, Question, Highscore, User } = require('../../models')

router.get('/', async (req, res) => {
    console.log('userId', req.session.userId)
    if (req.session.userId) {
        try {
            let user = await User.findOne({
                where: {
                    id: req.session.userId
                }
            })
            user = user.dataValues
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

router.get('/myQuizzes', async (req, res) => {
    if (req.session.userId) {
        try {
            let user = await User.findOne({
                where: {
                    id: req.session.userId
                }
            })
            user = user.dataValues
            const quizzes = await Quiz.findAll({
                where: {
                    user_id: req.session.userId
                }
            })
            res.render('myQuizzes', { user, quizzes })
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.render('login')
    } 
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.redirect('/')
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

module.exports = router