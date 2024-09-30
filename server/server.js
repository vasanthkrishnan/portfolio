require('dotenv').config()
const express = require('express')
const app = express()
const dbConnection = require('./config/db')

const port = process.env.port || 7777

app.listen(port, () => {
    console.log(`Running in port ${port}`)
})