const router = require('express').Router();
const db = require('./time_series.model')
const fs = require('fs')
const cache = require('../../cache/time-series.cache')

router.get('/',(req,res) =>{
    db.getAllData()
    .then(response =>{
   response.map(item =>{
    const items =
    {
 active:item.active,
 cases:item.cases,
 deaths:item.deaths,
 recovered:item.recovered,
 tested:item.tested,
 country:item.country,
 date:item.date}
 cache.set(items.date,response.date)
     })
     

     res.status(200).json(response)
    })
    .catch(error =>{
        res.status(401).json(error.message)
    })
})


router.get('/byCountry/:iso',  (req,res) =>{
     const iso = req.params.iso
    const getCode = cache.get(iso)
    if (getCode){
        res.status(200).json('response')
    }
     db.getByCountry(iso)
    .then(date =>{
    res.status(200).json(date.name)
    cache.set(date,date)
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