const router = require('express').Router()
const Question = require('../models/Question')
const Highscore = require('../models/Highscore')
const path = require('path')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/quiz', (req, res) => {
    const questions = Question.findAll({
        where: {
            quiz_id: 1,
        },
    })
    res.render('question')
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