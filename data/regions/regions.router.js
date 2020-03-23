const router = require("express").Router();
const db = require("./regions.model")

/**
 * Regions Router
 * @param {GET} /regions/
 * @code 200
 * @returns {Object}
 */
router.get("/",(req,res) =>{
    
    db.getData()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error =>{res.status(401).json({message:error.message})})
})
router.get("/sum/:country", (req, res) => {
    const country = req.params.country

    db.getRegionSum(country)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => { res.status(401).json({ message: error.message }) })
})
router.get("/:country", (req, res) => {
    const country = req.params.country

    db.getRegionData(country)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => { res.status(401).json({ message: error.message }) })
})
/*router.get('/:id',(req,res) =>{
    const id = req.params.id
    console.log("ID",id)
    console.log("REQ.PARAMS.ID",req.params.id)
    db.joinData(id)
    .then(response =>{
        console.log(response)
        res.status(200).json(response)
    })
    .catch(error =>{
        console.log(error)
        res.status(401).json(error.message)
    })
})*/
router.post('/byDate',(req,res) =>{
    const id = req.body.id
    const date = req.body.date
    console.log("ID",id,date)
    
    db.joinCountryByDate(id,date)
    .then(response =>{
        console.log(response)
        res.status(200).json(response)
    })
    .catch(error =>{
        console.log(error)
        res.status(401).json(error.message)
    })
})

/**
 * @param {POST}
 * @code 201
 * @returns {Object}
 * @returns {String} ID
 */
router.post('/',(req,res) =>{
    const data = req.body
    db.postData(data)
    .then(projectObj => {
        res.status(201).json(projectObj)
    })
    .catch(error => {res.status(401).json(error.message)})
})

router.put('/:id',(req,res) =>{
    const id = req.params.id
    const updates = req.body
    db.updateData(id,updates)
    .then(updatedProject =>{
        res.status(200).json(updatedProject)
    })
    .catch(error =>{res.status(401).json(error.message)})
})

router.delete('/:id',(req,res)=> {
    const id = req.params.id
    db.deleteData(id)
    .then(deleteData =>{
        res.status(204).json({message:'deleted',deleteData})
    })
    .catch(error => {res.status(500).json(error.message)})
})


module.exports= router