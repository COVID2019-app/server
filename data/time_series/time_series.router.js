const router = require('express').Router();
const db = require('./time_series.model')
const fs = require('fs')


router.get('/',(req,res) =>{
    db.getAllData()
    .then(response =>{
        res.status(200).json(response)
    })
    .catch(error =>{
        res.status(401).json(error.message)
    })
})


router.get('/byCountry/:iso',(req,res) =>{
    const country = req.params.iso.toUpperCase()
    console.log(country)
    db.getByCountry(country)
    .then(response =>{
        res.status(200).json(response)
    })
    .catch(error =>{
        res.status(401).json(error.message)
    })
})
router.get('/byDate/:date',(req,res) =>{
   
    const dates = req.params.date.replace('-','/').replace('-','/')
    console.log(dates)
    db.getByDate(dates)
    .then(response =>{
        res.status(200).json(response)
    })
    .catch(error =>{
        res.status(401).json(error.message)
    })
})
module.exports = router