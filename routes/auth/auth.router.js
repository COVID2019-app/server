const router = require('express').Router();
const db = require('./user.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const secrets = require('../../config/default');

// for endpoints beginning with /auth
router.post('/register', (req, res) => {
  let username = req.body.username;
  let password = req.body.password
  console.log("THis is",username.password)
  let hash = bcrypt.hashSync(password,10); // 2 ^ n
    password = hash
  const data={username:username,password:hash}
  db.postData('users',data)
    .then(saved => {
    
      res.status(201).json(saved);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ message: 'cannot add the user', error });
    });
});

router.post('/login', (req, res) => {
  let  username = req.body.username;
  let  password = req.body.password
  let data = {username, password}
   console.log(data)
  db.getData('users', data)
    .first()
    .then(user => {
      if (user) {
        // produce token
        const token = generateToken(user.username);

        // add token to response
        res.status(200).json({
          message: `Welcome ${user.username}`,
          token,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id,
    role: user.role,
  };
  const options = {
    expiresIn: '4h',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}


module.exports = router;
