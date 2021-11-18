const express = require('express')
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()


// connect to database
const connection = require('./config/connection')
connection.authenticate()
.then(() => console.log('coding_quiz_db connected...'))
.catch(err => console.log('db.authenticate error: ' + err))

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// handlebars view engine
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')


// routes
app.use('/', require('./routes/htmlRoutes'))
app.use('/api', require('./routes/apiRoutes'))

const PORT = 3001
app.listen(3001, () => console.log(`listening on http://localhost:${3001}`))