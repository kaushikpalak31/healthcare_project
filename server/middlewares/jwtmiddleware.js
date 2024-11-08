var jwt = require('jsonwebtoken');
const createtoken = (userData)=>{
    return jwt.sign(userData,process.JWT_SECRET)
}
module.exports = {createtoken}