const router = require('express').Router()

const apiRoutes = require('./apiRoutes')
const htmlRoutes = require('./htmlRoutes')
const questionRoutes = require('./questionRoutes')

router.use('/', htmlRoutes)
router.use('/questions', questionRoutes)
router.use('/api', apiRoutes)

module.exports = router