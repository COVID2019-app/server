const router = require("express").Router();
const db = require("./country.model")
const auth = require("../../routes/auth/auth.middleware")
/**
 * Countries Router
 * @param {GET} /countries/
 * @code 200
 * @returns {Object}
 */

router.get('/regions_iso',(req,res) =>{
  db.getIso()
  .then(response =>{res.status(200).json(response)})
  .catch(err => {res.status(401).json(err)})
})
router.get("/sort",(req,res) =>{

    if (!req.body.category) {
        db.getData("confirmed_cases")
          .then(data => {
            res.status(200).json(data);
          })
          .catch(error => {
            res.status(401).json({ message: error.message });
          });
 } else {
     db.getData(req.body.category)
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
 * @param {GET}
 * @code 200
 * @returns {Object} Country
 */

 router.get('/:id', (req, res) => {
   const id = req.params.id;
   db.getDataId(id)
     .then(data => {
       res.status(200).json(data);
     })
     .catch(error => {
       res.status(401).json(error.message);
     });
 });
/**
 * @param {POST}
 * @code 201
 * @returns {Object}
 * @returns {String} ID
 */
router.post('/', auth.restricted, (req, res) => {
  
  const data = req.body;
  db.postData(data)
    .then(Obj => {
      res.status(201).json(Obj);
    })
    .catch(error => {
      res.status(401).json(error.message);
    });
});


router.put('/:id', auth.restricted, (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  console.log(req.body, req.headers, id, updates);
  db.updateData(id, updates)
    .then(updatedProject => {
      res.status(200).json(updatedProject);
    })
    .catch(error => {
      res.status(401).json(error.message);
    });
});

router.delete('/:id', auth.restricted, (req, res) => {
  const id = req.params.id;
  db.deleteData(id)
    .then(deleteData => {
      res.status(204).json({ message: 'deleted', deleteData });
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports= router