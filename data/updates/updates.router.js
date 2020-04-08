const router = require('express').Router();
const db = require('./updates.model')
const iso = require('../country/country.model')
const fs = require('fs')
router.post('/' , (req,res) =>{
    // console.log(req)
    let i = 0
    let id = []
    const data = req.body
     iso.getIso()  
    .then(isoCode =>{
    while ( i < isoCode.length){
       
           if (isoCode[i].country.toUpperCase() === data.country.toUpperCase()){
                id.push(isoCode[i])
                console.log(id)
           }
              i ++;
         }
          return id
    })
 
//  db.postData('',data)
//  .then(response =>{
  
//      res.status(200).json(response)
//  })
 .catch(error => res.status('401').json(error))
 

})
router.get('/change_log',(req,res) =>{
    db.getChange('record_changelog')
    .then(response =>{
        res.status(200).json(response)
    }).catch(err => {res.status(401).json(err)})
})
router.get('/old',(req,res) =>{
    db.getMany('latest_home_data')
    .then(response =>{
      
     fs.writeFile('data.json',JSON.stringify(response),function (err){
         if (err) throw err;
         console.log("Complete DATA>JSON")
     })
     res.status(200).json(response)
    })
    .catch(error => {console.log(error)})
})
router.get('/', (req,res) =>{
    regions_iso = req.body
    db.getAll(regions_iso)

    .then(response =>{
        console.log(response)
        res.status(200).json(response)
    })
    .catch(error => {res.status(401).json(error)})
})

module.exports = router