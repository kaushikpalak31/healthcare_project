const jwt = require('jsonwebtoken');
const createtoken = (userData)=>{
    return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:40000});
}
const validateJwtToken = (req,res,next)=>{

    const authCheck = req.headers.authorization
}
module.exports = {createtoken}