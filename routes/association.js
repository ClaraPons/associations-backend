const express = require('express')
const app = express()
const {verifyAsso} = require('../middlewares/associations')
const moment = require('moment')
const messages = require('../message.json')


app.get('/:slug', verifyAsso, (req, res) => {
    res.json(req.findAsso)
})

app.post('/:slug', verifyAsso, (req, res) =>{
    const message = {
        name: req.body.name, 
        content: req.body.content,
        date: moment().calendar(), 
        slug: req.findAsso.slug
    }
    
    messages.push(message)
    res.json(messages)
})

app.get('/:slug/message', (req, res) =>{
    res.json(messages)
})

module.exports = app