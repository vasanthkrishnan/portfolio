require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const dbConnection = require('./config/db')
const Contact = require('./routes/ContactRoutes')

app.use(express.json())
app.use(cors())

const port = process.env.port || 7777

app.use('/project', Contact)



app.listen(port, () => {
    console.log(`Running in port ${port}`)
})