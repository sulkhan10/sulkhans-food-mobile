const jwt = require('jsonwebtoken');
const secret = "sugoisenpai"

module.exports={
    generateToken : (payload)=>  jwt.sign(payload, secret),
    decodeToken : (token)=>  jwt.verify(token, secret),
}