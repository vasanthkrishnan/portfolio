require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.mongodb)

const connection = mongoose.connection

connection.on('connected', () => {
    console.log("connected")
})

connection.on('error', () => {
    console.log("Error connected to db")
})