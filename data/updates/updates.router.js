const router = require('express').Router();
const db = require('./updates.model')
const fs = require('fs')
router.post('/' , (req,res) =>{
    console.log(req)
    const data = req.body
 db.postData('latest_home_data',data)
 .then(response =>{
  
     res.status(200).json(response)
 })
 .catch(error => res.status('401').send(`<h4>${error}</h4>`).json(error.message))
 

})
router.get('/change_log',(req,res) =>{
    db.getChange('record_changelog')
    .then(response =>{
        res.status(200).json(response)
    }).catch(err => {res.status(401).json(err)})
})
router.get('/',(req,res) =>{
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
    db.getData('latest_home_data')

    .then(response =>{
        console.log(response)
        res.status(200).json(response)
    })
    .catch(error => {res.status(401).json(error)})
})

module.exports = router