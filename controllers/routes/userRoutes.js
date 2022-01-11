const router = require('express').Router()
const { User, Quiz, Question, Highscore } = require('../../models')

router.post('/', (req, res) => {
    let { email, username, password } = req.body
    User.create({
        email,
        username,
        password
    })
})

module.exports = router