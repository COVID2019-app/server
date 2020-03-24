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

router.put('/:id',(req,res) =>{
    const id = req.params.id
    const updates = req.body
    db.updateData(id,updates)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(error => {
        res.status(401).json(error.message)
    })
})
module.exports = router