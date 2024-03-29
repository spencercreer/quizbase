const router = require('express').Router()
const { User, Quiz, Question } = require('../../models')
const withAuth = require('../../utils/auth')

// add a quiz
router.post('/add', withAuth, (req, res) => {
    let { quizName, questionsArray } = req.body
    let imageLink = './assets/quiz_base_logo.png'
    
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

router.get('/:id', async (req, res) => {
    if(req.session.userId) {
        try {
            let user = await User.findOne({
                where: {
                    id: req.session.userId
                }
            })
            user = user.dataValues
            const quiz = await Quiz.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.render('quiz', { layout: 'main', quiz, user })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        try {
            const quiz = await Quiz.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.render('quiz', { layout: 'main', quiz })
        } catch (err) {
            res.status(500).json(err)
        }
    }
})

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