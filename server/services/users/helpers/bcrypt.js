const {hashSync,compareSync,genSaltSync} = require('bcrypt')
const saltRounds = 12
const salt = genSaltSync(saltRounds);

module.exports={
    hashPassword : (myPlaintextPassword)=>  hashSync(myPlaintextPassword, salt),
    comparePassword : (plainPw, hash)=>  compareSync(plainPw, hash),
}