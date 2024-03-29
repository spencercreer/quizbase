const router = require('express').Router()
const { Quiz, User } = require('../../models')

router.get('/', async (req, res) => {
    if (req.session.userId) {
        try {
            let user = await User.findOne({
                where: {
                    id: req.session.userId
                }
            })
            user = user.dataValues
            const quizzes = await Quiz.findAll({})
            res.render('index', { layout: 'main', user, quizzes })
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        try {
            const quizzes = await Quiz.findAll({})
            res.render('index', { layout: 'main', quizzes })
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
            res.render('myQuizzes', { layout: 'main', user, quizzes })
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.render('login', { layout: 'landing' })
    } 
})

router.get('/login', (req, res) => {
    res.render('login', { layout: 'landing' })
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
    res.render('signup', { layout: 'landing' })
})

router.get('/updatePassword', (req, res) => {
    res.render('updatePassword', { layout: 'landing' })
})

module.exports = router