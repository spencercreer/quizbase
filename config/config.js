const Sequelize = require('sequelize')
require('dotenv').config()

let connection
if (process.env.JAWSDB_URL) {
    connection = new Sequelize(process.env.JAWSDB_URL)
} else {
    connection = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
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