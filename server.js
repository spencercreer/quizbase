const express = require('express')
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()


// connect to database
const sequelize = require('./config/config')
sequelize.authenticate()
    .then(() => console.log('coding_quiz_db connected...'))
    .catch(err => console.log('db.authenticate error: ' + err))

const app = express()
const PORT = 3001

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// handlebars view engine
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: {
        inc: function (value, options) {
            return parseInt(value) + 1;
        }
    }
}))
app.set('view engine', 'handlebars')


// routes
app.use(require('./controllers/'));

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))