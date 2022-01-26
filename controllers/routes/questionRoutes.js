const router = require('express').Router()
const { Quiz, Question, Highscore } = require('../../models')

// get all questions
router.get('/:id', (req, res) => {
    Question.findAll({
        where: {
            quiz_id: req.params.id,
        },
        include: [Quiz],
        order: [
            ['id', 'DESC']
        ]
    })
        .then(questions => res.render('questions', { questions }))
        .catch(err => console.log(err))
})

// add one question
router.post('/add/:id', (req, res) => {
    let { question, answer, choice_a, choice_b, choice_c } = req.body 
    Question.create({
        question,
        answer,
        choice_a,
        choice_b,
        choice_c,
        quiz_id: req.params.id
    })
    .then(() => res.redirect(`/questions/${req.params.id}`))
    .catch(err => console.log(err))
})

// edit one question
router.put('/edit/:id', (req, res) => {
    console.log(req.params.id)
    let { question, answer, choice_a, choice_b, choice_c, quiz_id } = req.body 
    Question.update({
        question,
        answer,
        choice_a,
        choice_b,
        choice_c
    },
    {
        where: { id: req.params.id }
    })
    .then(() => res.redirect(`/questions/${quiz_id}`))
    .catch(err => console.log(err))
})

// delete one question
router.delete('/delete/:id', (req, res) => {
    Question.destroy({
        where: { id: req.params.id }
    })
    .then(res.status(204).end())
    .catch(err => console.log(err))
})

module.exports = router