const router = require('express').Router();
const db = require('./updates.model')

router.post('/' , (req,res,next) =>{
    console.log(req)
    const data = req.body
  if (data === !null){
    return db.postData(data) .then(response =>{res.status(200).json(response)}) .catch(error =>{res.status(401).json(error.message)})
  }
})

module.exports = router