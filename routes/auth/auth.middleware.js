  
const jwt = require('jsonwebtoken')

const secrets = require('../../config/default')

module.exports = {
  restricted,
  generateToken,
  restricted
 
}

// Restrict access based on valid token
function restricted(req, res, next) {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) res.status(401).json({ message: 'you shall not pass!' })
      else {
        req.user = { username: decodedToken.username }
        next()
      }
    })
  } else res.status(400).json({ message: 'no credentials provided' })
}

// Generate token via JWT
function generateToken(newUser) {
  const payload = {
    user_id: newUser.id
  }
  const options = {
    expiresIn: '4h'
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}



