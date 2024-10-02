const express = require('express')
const router = express.Router()
const Contact = require('../models/contactModels')

router.post('/add', async (req, res) => {
    try {
        const newContactData = new Contact(req.body)
        const { name, email, phone, message } = newContactData
        if(!name || !email || !phone || !message) {
            res.status(400).json({message: "Name, email, phone, message are required"})
        }
        const saveContactData = await newContactData.save()
        res.status(200).json(saveContactData)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

module.exports = router