const router = require('express').Router()
const Question = require('../models/Question')
const Highscore = require('../models/Highscore')
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/quiz.html'))
})

router.get('/add-highscore', (req, res) => {
    res.render('add-highscore')
})

router.get('/highscores', (req, res) => {
    Highscore.findAll()
    .then(highscores => res.render('highscores', { 
        layout: 'main',
        highscores,
    }))
    .catch(err => console.log(err))
})

module.exports = router