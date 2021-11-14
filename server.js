const express = require('express')
const path = require('path')
require('dotenv').config()

const connection = require('./config/connection')

connection.authenticate()
    .then(() => console.log('coding_quiz_db connected...'))
    .catch(err => console.log('db.authenticate error: ' + err))

const app = express()

const PORT = 3001

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('index.html'))

app.listen(3001, () => console.log(`listening on http://localhost:${3001}`))