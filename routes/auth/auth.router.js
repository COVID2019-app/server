const router = require('express').Router();
const db = require('./user.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const secrets = require('../../config/default');


// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
  let user = req.body;
  console.log("THis is",user)
  const hash = bcrypt.hashSync(user.password,10); // 2 ^ n
 user.password = hash

  db.postData(user)
    .then(saved => {
      console.log("Add Route",saved)
      res.status(201).json(saved);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ message: 'cannot add the user', error });
    });
});

router.post('/login', (req, res) => {

  
    const username = req.body.username
    const password = req.body.password
    console.log(username,password)
  if(!password){
    return res.status(401).json({message:"Check password"})
  }
  db.getData(username)
    .first()
    .then(user => {
      console.log(user)
      if (user.password === password) {
        // produce token
        const token = generateToken(user);

        // add token to response
       return  res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        return res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
    return   res.status(401).json({message:"Please check login credentials",error:error.message});
    });
});
router.get("/logout",(req,res) =>{
  if(req.session){
    req.session.destroy(err =>{
      res
        .status(200)
        .json({
          message:
          'Logout successfull'
        })
    })
  }else {
    res.status(200).json({message:'Not logged in'})
  }
})


function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id,
    role: user.role,
  };
  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}


module.exports = router;
