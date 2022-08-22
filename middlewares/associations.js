const associations = require('../associations.json')

const verifyAsso = (req, res, next) => {
    const findAsso = associations.find((association) =>{
        return association.slug === req.params.slug
    })

    if(findAsso){
        req.findAsso = findAsso
        next()
    }else{
        res.status(404).json('Not Found')
    }
}

module.exports = {
    verifyAsso
}