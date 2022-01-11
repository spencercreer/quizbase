const router = require('express').Router()
const { User, Quiz, Question, Highscore } = require('../../models')

router.post('/signup', (req, res) => {
    let { email, username, password } = req.body
    console.log(email, username, password)
    User.create({
        email,
        username,
        password
    })
    .then(user => res.json(user))
})

module.exports = router