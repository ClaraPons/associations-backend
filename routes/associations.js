const express = require('express')
const app = express('')
const associations = require('../associations.json')
const {verifyAsso} = require('../middlewares/associations')

app.get('/', (req, res) => {
    res.json(associations)
})

app.get('/:slug', verifyAsso, (req, res) => {
    res.json(req.findAsso)
})

module.exports = app