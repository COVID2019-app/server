const router = require("express").Router();
const db = require("./daily.model")
const auth = require("../../routes/auth/auth.middleware")

router.post('/', auth.restricted, (req, res) => {
  const data = req.body;
  db.postData(data)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => res.status(401).json(err.message));
});

router.get('/',(req,res) =>{
    db.getData()
    .then(response =>{
        res.status(200).json(response)
    })
    .catch(err => {res.status(401).json(err.message)})
})

<<<<<<< HEAD
=======
router.put('/:id', auth.restricted, (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  db.updateData(id, updates)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(401).json(error.message);
    });
});
>>>>>>> 8cbfc9f11eeab84f9b7ab1c829a8ef39f766d390
module.exports = router