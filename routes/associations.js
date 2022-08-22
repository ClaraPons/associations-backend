const express = require('express')
const app = express('')
const associations = require('../associations.json')


app.get('/', (req, res) => {
    res.json(associations)
})

module.exports = app