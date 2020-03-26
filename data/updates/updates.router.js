const router = require('express').Router();
const db = require('./updates.model')

router.post('/' , (req,res) =>{
    console.log(req)
    const data = req.body
 db.postData('updates')
 .then(response =>{
     res.status(200).json(response)
 })
 .catch(error => res.status('401').send(`<h4>${error}</h4>`).json(error.message))
 

})

router.get('/', (req,res) =>{
    db.getData('updates')
    .then(response =>{
        res.status(200).json(response)
    })
    .catch(error => {res.status(401).json(error)})
})

module.exports = router