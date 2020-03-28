const router = require('express').Router();
const db = require('./user.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const secrets = require('../../config/default');


router.post('/register', (req, res) => {
  

//   const hash = bcrypt.hashSync(user.password,10); // 2 ^ n
//  user.password = hash

  db.postData(req.body)
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
  let { username, password } = req.body;

  db.findBy({ username })
    .first()
    .then(user => {
      if (user.username === username && user.password === password  ) {
        // produce token
        const token = generateToken(user);

        // add token to response
        res.status(200).json({
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
// router.get("/logout",(req,res) =>{
//   if(req.session){
//     req.session.destroy(err =>{
//       res
//         .status(200)
//         .json({
//           message:
//           'Logout successfull'
//         })
//     })
//   }else {
//     res.status(200).json({message:'Not logged in'})
//   }
// })


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
