const express = require('express')
const app = express('')
const messages = require('../message.json')
const moment = require('moment')
const {verifyAssoMessage} = require('../middlewares/messages')


app.post('/', verifyAssoMessage, (req, res) =>{
    const message = {
        name: req.body.name, 
        content: req.body.content,
        date: moment().format(), 
        slug: req.body.slug
    }

    messages.push(message)
    res.json(message)
})

app.get('/', (req, res) =>{
    const sortedMessages = messages.sort((a,b) => {
        return moment(b.date).format('x') - moment(a.date).format('x')
    })
    res.json(sortedMessages)
    
})


module.exports = app