const router = require("express").Router();
const db = require("./country.model")

/**
 * Countries Router
 * @param {GET} /countries/
 * @code 200
 * @returns {Object}
 */
router.get("/",(req,res) =>{
    if (!req.body) {
        db.getData("confirmed_cases")
          .then(data => {
            res.status(200).json(data);
          })
          .catch(error => {
            res.status(401).json({ message: error.message });
          });
 } else {
     db.getData(req.body)
       .then(data => {
         res.status(200).json(data);
       })
       .catch(error => {
         res.status(401).json({ message: error.message });
       });
}
}
)

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