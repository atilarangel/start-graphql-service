require('dotenv').config()
const promise = require('bluebird')
const options = {
    promiseLib: promise
}
const pg = require('pg-promise')(options)

const username = process.env.DB_USER
const password = process.env.DB_PASS
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const db = process.env.DB

const database = pg(`postgres://${username}:${password}@${host}:${port}/${db}`)

module.exports = database
