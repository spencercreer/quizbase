const router = require('express').Router()

const apiRoutes = require('./apiRoutes')
const homeRoutes = require('./homeRoutes')
const questionRoutes = require('./questionRoutes')

router.use('/', homeRoutes)
router.use('/questions', questionRoutes)
router.use('/api', apiRoutes)

module.exports = router