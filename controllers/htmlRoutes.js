const router = require('express').Router()
const { Quiz, Question, Highscore } = require('../models')
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/quiz.html'))
})


module.exports = router