const router = require('express').Router()
const db = require('./state.model')

router.get('/',(req,res) =>{
    db.getState()
    .then(response =>{
       return res.status(200).json(response)
    })
    .catch(error =>{
        return res.status(401).json(error.message)
    })
})

router.get('/byCountry/:id', (req,res) =>{
    const country_id = req.params.id
    console.log(country_id)
    db.getByCountryId(country_id)
    .then(response =>{
        return res.status(201).json(response)
    })
    .catch(error =>{
        return res.status(401).json(error)
    })
})

router.post('/',(req,res) =>{
    const data = req.body
    db.addState(data)
    .then(response =>{
        return res.status(201).json(response)

    })
    .catch(error =>{
        return res.status(401).json(error,error.message)
    })
})

router.put('/update/:id',(req,res) =>{
    const Update = req.body
    const Id = req.params.id
    db.updateState(Update,Id)
    .then(response =>{
       return  res.status(201).json(response)
    }) 
    .catch(error =>{
         return res.status(401).json(error,error.message)
    })
})

router.delete('/:id',(req,res) =>{
    const Id = req.params.id
    db.deleteState(Id)
    .then(response => {
        return res.status(204).json(response)
    })
    .catch(error =>{
        return res.status(401).json(error,error.message)
    })
})

module.exports = router