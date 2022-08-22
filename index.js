const express = require('express')
const app = express()
const port = 5005
const morgan = require('morgan')
const cors = require('cors')
const getAssociations = require('./routes/associations')
const getAssociation = require('./routes/association')

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.use('/associations', getAssociations)
app.use('/association', getAssociation)

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
})