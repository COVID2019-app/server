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


router.get('/byCountry/:iso',  (req,res) =>{
    const bill = req.params.iso.toUpperCase();
     db.getByCountry(bill)
        .then(response =>{
    res.status(200).json(response.name)
    })
    .catch(error =>{
        res.status(401).json(error)
    })
})
router.get('/byDate/:day',(req,res) =>{
    let dates = []
    let data =[]
    const day = JSON.stringify(req.params.date)
    console.log(day)
    db.getByDate(day)
    .then(re =>{
        dates.push(JSON.stringify(re))
        // re.map(r =>{
           
        // data = {date:r.date,cases:r.cases,recovered:r.recovered,deaths:r.deaths,country:r.country,tested:r.tested,growthFactor:r.growthFactor}
        // })
       
   
         res.status(200).json(dates)
 
        
     
        
    })
    .catch(err =>{
        res.status(401).json(err.message)
    })
})

router.post('/add',(req,res) =>{
    const data = req.body
    db.addData(data)
    .then(resp =>{res.status(200).json(resp)})
    .catch(error =>{res.status(401).json(error.message)})
})
module.exports = router