const Sequelize = require('sequelize')
require('dotenv').config()

let connection
if (process.env.JAWSDB_URL) {
    connection = new Sequelize(process.env.JAWSDB_URL)
} else {
    connection = new Sequelize(
        'coding_quiz_db',
        'root',
        process.env.PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    )
}

module.exports = connection