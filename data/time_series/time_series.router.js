const router = require('express').Router();
const db = require('./time_series.model')
const fs = require('fs')
const cache = require('../../cache/time-series.cache')

router.get('/',(req,res) =>{
  
     db.getAllData()
     .then(resp => {
    res.status(200).send(resp)
    cache.set('time_series',resp) 
       })
    .catch(error =>{
        throw error
    })
})



router.get('/byCountry/:iso',  async (req,res) =>{
     const iso = req.params.iso.toUpperCase()
    
   await  db.getByCountry(iso)
     .then(resp =>{
        cache.set('byCountry',resp)
     res.status(200).json(resp)
  
    })
    .catch(error =>{
        res.status(401).json(error)
    })
})
// router.get('/byDate/:day',(req,res) =>{
//     let dates = []
//     let data =[]
//     const day = JSON.stringify(req.params.date)
//     console.log(day)
//     db.getByDate(day)
//     .then(re =>{
//         dates.push(JSON.stringify(re))
//         // re.map(r =>{
           
//         // data = {date:r.date,cases:r.cases,recovered:r.recovered,deaths:r.deaths,country:r.country,tested:r.tested,growthFactor:r.growthFactor}
//         // })
       
   
//          res.status(200).json(dates)
 
        
     
        
//     })
//     .catch(err =>{
//         res.status(401).json(err.message)
//     })
// })

router.post('/add',(req,res) =>{
    const data = req.body
    db.addData(data)
    .then(resp =>{res.status(200).json(resp)})
    .catch(error =>{res.status(401).json(error.message)})
})
module.exports = router