const router = require('express').Router()

const homeRoutes = require('./routes/homeRoutes')
const questionRoutes = require('./routes/questionRoutes')
const quizRoutes = require('./routes/quizRoutes')
const highscoreRoutes = require('./routes/highscoreRoutes')

router.use('/', homeRoutes)
router.use('/questions', questionRoutes)
router.use('/quiz', quizRoutes)
router.use('/highscores', highscoreRoutes)

module.exports = router