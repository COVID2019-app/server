const router = require("express").Router();
const db = require("./daily.model")


router.post('/',(req,res)=>{
    const data = req.body
    db.postData(data)
    .then(response =>{
        res.status(201).json(response)
    })
    .catch(err =>res.status(401).json(err.message))
})

router.get('/',(req,res) =>{
    db.getData()
    .then(response =>{
        res.status(200).json(response)
    })
    .catch(err => {res.status(401).json(err.message)})
})

module.exports = router