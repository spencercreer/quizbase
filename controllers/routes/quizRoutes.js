const router = require('express').Router()
const { Quiz, Question, Highscore } = require('../../models')
const withAuth = require('../../utils/auth')

// add a quiz
router.post('/add', withAuth, (req, res) => {
    let { quizName, questionsArray } = req.body
    let imageLink = './assets/ms-icon-310x310.png'
    
    Quiz.create({
        user_id: req.session.userId,
        quiz_name: quizName,
        image_link: imageLink
    })
        .then(async (quiz) => {
            questionsArray.forEach(question => {
                question.quiz_id = quiz.id
            })
            console.log(questionsArray)
            await Question.bulkCreate(questionsArray, {
                individualHooks: true,
                returning: true,
            })

            res.redirect('/')
        })
        .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    let { username, userId } = req.session

    Quiz.findAll({
        where: {
            id: req.params.id,
        }
    })
        .then(([quiz]) => {
            console.log(username)
            res.render('quiz', { quiz, username, userId })
        })
        .catch(err => console.log(err))
})

// delete one quiz
router.delete('/delete/:id', withAuth, (req, res) => {
    Quiz.destroy({
        where: { id: req.params.id }
    })
    .then(res.status(204).end())
    .catch(err => console.log(err))
})

router.get('/questions/:id', (req, res) => {
    Question.findAll({
        where: {
            quiz_id: req.params.id,
        }
    })
        .then(questions => res.send(questions))
        .catch(err => console.log(err))
})

module.exports = router