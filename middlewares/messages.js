const associations = require('../associations.json')

const verifyAssoMessage = (req, res, next) => {
    const findAsso = associations.find((association) =>{
        return association.slug === req.body.slug
    })

    if(findAsso){
        req.findAsso = findAsso
        next()
    }else{
        res.status(404).json('Not Found')
    }
}

module.exports = {
    verifyAssoMessage
}