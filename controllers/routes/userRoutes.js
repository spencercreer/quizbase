const router = require('express').Router()
const { User, Quiz, Question, Highscore } = require('../../models')

router.post('/login', async (req, res) => {
    let {email, password } = req.body
    try {
        const user = await User.findOne({
            where: {
                email
            }
        })

        if (!user) {
            res.status(400).json({ message: 'Invalid user email'})
            return
        }
        
        req.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;
      
            res.json({ user, message: 'You are now logged in!' });
          });

    } catch (err) {
        res.status(400).json({ message: 'Something went wrong '})
    }
    
})

router.post('/signup', (req, res) => {
    let { email, username, password } = req.body
    User.create({
        email,
        username,
        password
    })
    .then(user => res.json(user))
})

module.exports = router